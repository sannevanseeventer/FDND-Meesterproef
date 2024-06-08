<svg class="loader" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect class="spinner_rect" x="4.5" y="2" width="3" height="20" rx="1.5" ry="1.5" />
  <rect class="spinner_rect rect2" x="10.5" y="4" width="3" height="16" rx="1.5" ry="1.5" />
  <rect class="spinner_rect rect3" x="16.5" y="6" width="3" height="12" rx="1.5" ry="1.5" />
</svg>

<style>
  .spinner_rect {
    animation: bounce 0.5s infinite;
    fill: var(--lightpink);
    border-radius: 1.5px;
  }
  .loader {
    display: block;
    margin: 1rem auto;
  }
  .rect2 {
    animation-delay: 0.1s;
  }
  .rect3 {
    animation-delay: 0.2s;
  }

  /* animation */
  @keyframes bounce {
    0%,
    57.14% {
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
      transform: translate(0);
    }
    28.57% {
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
      transform: translateY(-6px);
    }
    100% {
      transform: translate(0);
    }
  }
</style>
