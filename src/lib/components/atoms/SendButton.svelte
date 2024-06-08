<button
  >Send <svg
    fill="#fff"
    class="arrow"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="512"
    height="512"
    ><path
      d="M18 12a2 2 0 0 0-.59-1.4l-4.29-4.3a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L15 11H5a1 1 0 0 0 0 2h10l-3.29 3.29a1 1 0 0 0 1.41 1.42l4.29-4.3A2 2 0 0 0 18 12Z"
    /></svg
  >
</button>

<style>
  svg {
    height: 1.9rem;
    width: auto;
    transition: transform 0.3s ease;
  }

  button {
    border: none;
    background: transparent;
    color: white;
    font-size: 1.2rem;
    font-family: 'Righteous';
    text-transform: uppercase;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
  }

  button:hover > .arrow {
    transform: translateX(5px);
  }
</style>
