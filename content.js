document.addEventListener('DOMContentLoaded', function() {
  const adContainer = document.querySelector('.ad-container');
  if (adContainer) {
    const teikure = document.createElement('div');
    teikure.textContent = "この動画は○○の提供でお送りします";
    teikure.style.position = 'absolute';
    teikure.style.top = '10px';
    teikure.style.left = '10px';
    teikure.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    teikure.style.color = 'white';
    teikure.style.padding = '10px';
    adContainer.appendChild(teikure);
  }
});
