/**
 * LOCCA Hair Studio — Premium Motion & Interaction Controller
 * Lightweight Vanilla JS (< 3KB), Zero External Dependencies
 */

(function () {
  'use strict';

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initHeaderScroll();
    initMobileMenu();
    initSmoothAnchors();
  });

  /**
   * 1. SCROLL REVEAL (IntersectionObserver)
   * High performance: single observer, unobserves on trigger, zero CPU waste
   */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
    if (!revealElements.length) return;

    // If reduced motion is preferred or IntersectionObserver not supported, reveal immediately
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('reveal-active'));
      return;
    }

    // Set initial hidden state
    revealElements.forEach(el => {
      el.classList.add('reveal-init');
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px', // Trigger slightly before it hits bottom of viewport
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target); // Trigger once only
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /**
   * 2. HEADER SCROLL INTERACTION
   * Uses requestAnimationFrame for jitter-free 60fps performance
   */
  function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    let ticking = false;

    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 20) {
        if (!header.classList.contains('header-scrolled')) {
          header.classList.add('header-scrolled');
        }
      } else {
        if (header.classList.contains('header-scrolled')) {
          header.classList.remove('header-scrolled');
        }
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    // Initial check on page load
    onScroll();
  }

  /**
   * 3. LUXURY MOBILE DRAWER NAVIGATION
   * Smooth sliding drawer, ESC key listener, scroll locking
   */
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileMenuDrawer');
    if (!toggleBtn || !drawer) return;

    const drawerBackdrop = drawer.querySelector('.drawer-backdrop');
    const closeBtn = drawer.querySelector('.drawer-close-btn');
    const navLinks = drawer.querySelectorAll('a');

    function openMenu() {
      drawer.classList.remove('hidden');
      // Reflow for transition
      void drawer.offsetWidth;
      drawer.classList.add('is-open');
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      drawer.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (!drawer.classList.contains('is-open')) {
          drawer.classList.add('hidden');
        }
      }, 350);
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  /**
   * 4. SMOOTH ANCHOR SCROLLING (Offset by fixed header)
   */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerHeight = document.querySelector('header')?.offsetHeight || 80;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

          window.scrollTo({
            top: targetPosition,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
          });

          // Update URL hash without jumping
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      });
    });
  }

})();
