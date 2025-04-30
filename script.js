// Add event listeners to markers
document.querySelectorAll('.marker').forEach(marker => {
  marker.addEventListener('click', function() {
      alert(this.getAttribute('data-info')); // Show information from data attribute
  });
});