/**
 * QR Code Redirection Utility
 * Handles instantaneous clientside redirection for QR-coded landing pages.
 * Supports fallback to HTTP refresh and prepares hooks for tracking integration.
 */
(function () {
  // 1. Get destination URL from the redirect-target meta tag
  var redirectMeta = document.querySelector('meta[name="redirect-target"]');
  if (!redirectMeta) {
    console.error("QR Redirect: Target URL configuration missing.");
    return;
  }
  var targetUrl = redirectMeta.getAttribute("content");

  // 2. Analytics Integration Interface Hook
  // You can insert your GTM / GA4 / FB Pixel event tracking code here in the future.
  // To track scans before redirecting:
  // function trackAndGo() {
  //   // Track event here...
  //   executeRedirect();
  // }
  
  function executeRedirect() {
    // window.location.replace avoids cluttering session history, ensuring back-button behaves naturally
    window.location.replace(targetUrl);
  }

  // Execute redirection instantly
  executeRedirect();
})();
