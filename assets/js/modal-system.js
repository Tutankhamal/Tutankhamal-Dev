/**
 * MODAL SYSTEM - COMPLETE REWRITE
 * Robust modal management with mobile optimization
 */

class ModalSystem {
    constructor() {
        this.activeModal = null;
        this.originalBodyOverflow = '';
        this.originalBodyPosition = '';
        this.scrollPosition = 0;
        this.isMobile = window.innerWidth <= 768;
        
        this.init();
        this.bindEvents();
    }

    init() {
        // Create modal container if it doesn't exist
        if (!document.querySelector('.modal-container')) {
            const container = document.createElement('div');
            container.className = 'modal-container';
            document.body.appendChild(container);
        }

        // Initialize all modals
        this.modals = document.querySelectorAll('.modal');
        this.triggers = document.querySelectorAll('[data-modal-target]');
        this.closeButtons = document.querySelectorAll('.close-button');

        console.log(`Modal System initialized: ${this.modals.length} modals, ${this.triggers.length} triggers`);
    }

    bindEvents() {
        // Trigger events
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.getAttribute('data-modal-target');
                this.openModal(modalId);
            });
        });

        // Close button events
        this.closeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModal();
            });
        });

        // Overlay click events
        this.modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.closeModal();
            }
        });

        // Resize events
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth <= 768;
            if (this.activeModal) {
                this.adjustModalPosition();
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        
        if (!modal) {
            console.error(`Modal with ID '${modalId}' not found`);
            return;
        }

        // Close any existing modal first
        if (this.activeModal) {
            this.closeModal();
        }

        this.activeModal = modal;
        
        // Prevent body scroll and save current position
        this.preventBodyScroll();
        
        // Show modal with animation
        modal.style.display = 'block';
        
        // Force reflow for animation
        modal.offsetHeight;
        
        // Add active class for animations
        modal.classList.add('modal-active');
        
        // Focus management
        this.manageFocus(modal);
        
        // Mobile optimizations
        if (this.isMobile) {
            this.optimizeForMobile(modal);
        }
        
        // Adjust position
        setTimeout(() => {
            this.adjustModalPosition();
        }, 50);

        console.log(`Modal '${modalId}' opened`);
    }

    closeModal() {
        if (!this.activeModal) return;

        const modal = this.activeModal;
        
        // Remove active class
        modal.classList.remove('modal-active');
        
        // Hide modal after animation
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        
        // Restore body scroll
        this.restoreBodyScroll();
        
        // Clear active modal
        this.activeModal = null;
        
        console.log('Modal closed');
    }

    preventBodyScroll() {
        // Save current scroll position
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Save original body styles
        this.originalBodyOverflow = document.body.style.overflow;
        this.originalBodyPosition = document.body.style.position;
        
        // Apply scroll prevention
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
    }

    restoreBodyScroll() {
        // Restore original body styles
        document.body.style.overflow = this.originalBodyOverflow;
        document.body.style.position = this.originalBodyPosition;
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore scroll position
        window.scrollTo(0, this.scrollPosition);
    }

    manageFocus(modal) {
        // Find focusable elements
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
            // Focus first element (usually close button)
            focusableElements[0].focus();
            
            // Trap focus within modal
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            });
        }
    }

    optimizeForMobile(modal) {
        const modalContent = modal.querySelector('.modal-content');
        
        if (modalContent) {
            // Ensure modal is at top of viewport
            modal.scrollTop = 0;
            
            // Add mobile-specific class
            modal.classList.add('modal-mobile');
            
            // Smooth scroll to modal content
            setTimeout(() => {
                modalContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    adjustModalPosition() {
        if (!this.activeModal) return;
        
        const modalContent = this.activeModal.querySelector('.modal-content');
        if (!modalContent) return;
        
        // Reset any previous positioning
        modalContent.style.marginTop = '';
        
        // Calculate optimal position
        const viewportHeight = window.innerHeight;
        const modalHeight = modalContent.offsetHeight;
        const availableSpace = viewportHeight - 40; // 20px padding top/bottom
        
        if (modalHeight > availableSpace) {
            // Modal is taller than viewport - stick to top
            modalContent.style.marginTop = '20px';
        } else {
            // Center modal vertically
            const topMargin = Math.max(20, (viewportHeight - modalHeight) / 2);
            modalContent.style.marginTop = `${topMargin}px`;
        }
    }

    // Public method to close all modals
    closeAllModals() {
        this.modals.forEach(modal => {
            modal.style.display = 'none';
            modal.classList.remove('modal-active', 'modal-mobile');
        });
        
        this.restoreBodyScroll();
        this.activeModal = null;
    }

    // Public method to check if any modal is open
    isModalOpen() {
        return this.activeModal !== null;
    }

    // Public method to get current active modal
    getActiveModal() {
        return this.activeModal;
    }
}

// Initialize modal system when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.modalSystem = new ModalSystem();
    });
} else {
    window.modalSystem = new ModalSystem();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModalSystem;
}