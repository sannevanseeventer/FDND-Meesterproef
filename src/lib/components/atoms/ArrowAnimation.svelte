<script>
  import { onMount } from 'svelte'
  onMount(() => {
    const arrow = document.querySelector('.arrow')
    const skillsContainer = document.querySelector('.skills-container')

    const handleScroll = () => {
      const scrollLeft = skillsContainer.scrollLeft
      arrow.style.opacity = Math.max(1 - scrollLeft / 250, 0)
    }

    skillsContainer.addEventListener('scroll', handleScroll)

    return () => {
      skillsContainer.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<div class="arrow-container">
  <svg
    id="arrow"
    class="arrow animated bounce"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
  >
    <path
      d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z"
      data-name="Layer 2"
    />
  </svg>
</div>

<style>
  svg {
    display: none;
  }

  /* full screen */
  @media screen and (min-width: 48em) {
    .arrow-container {
      bottom: 0;
      left: 0;
    }

    svg {
      height: 50px;
      width: auto;
      display: block;
    }

    .arrow-container svg {
      left: 0;
      bottom: 0;
      margin: 1.5rem 2rem;
      position: fixed;
      transition: opacity 0.5s ease;
    }

    .bounce {
      animation-iteration-count: infinite;
      animation-duration: 1.5s;
      animation: bounce 3.6s ease infinite;
      transform-origin: 50% 50%;
    }

    /* animation */
    @keyframes bounce {
      0% {
        transform: translateX(0);
      }
      5.55556% {
        transform: translateX(0);
      }
      11.11111% {
        transform: translateX(0);
      }
      22.22222% {
        transform: translateX(15px);
      }
      27.77778% {
        transform: translateX(0);
      }
      33.33333% {
        transform: translateX(15px);
      }
      44.44444% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
</style>
