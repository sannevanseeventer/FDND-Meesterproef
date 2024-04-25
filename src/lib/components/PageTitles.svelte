<script>
    export let data;
import { onMount } from "svelte";
    import Start from "./Start.svelte";

onMount(() => {
    const container = document.querySelector(".container");
    const section = document.querySelector("section");

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    container.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = container.offsetLeft;
        initialTop = container.offsetTop;

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    function handleMouseMove(e) {
        if (isDragging) {
            e.preventDefault();
            const x = e.clientX;
            const y = e.clientY;
            const moveX = x - startX;
            const moveY = y - startY;

            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            const sectionWidth = section.offsetWidth;
            const sectionHeight = section.offsetHeight;

            let newLeft = initialLeft + moveX;
            let newTop = initialTop + moveY;

            // Restrict movement within section boundaries
            if (newLeft > 0) {
                newLeft = 0;
            } else if (newLeft < sectionWidth - containerWidth) {
                newLeft = sectionWidth - containerWidth;
            }

            if (newTop > 0) {
                newTop = 0;
            } else if (newTop < sectionHeight - containerHeight) {
                newTop = sectionHeight - containerHeight;
            }

            container.style.left = newLeft + "px";
            container.style.top = newTop + "px";
        }
    }

    function handleMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }

    window.onload = function() {
    // Verplaats het venster naar een standaardpositie
    window.moveTo(0, 0);

};
});
</script>

<section>
    <div class="container">       
        <Start />

        <!-- Pages -->
            {#each data.blogPosts as post}
                <a href="/{post.slug}">
                    <div class="card" style="top: {post.top}rem; left: {post.left}rem">
                        <div class="card-container">
                            <h2>{post.title}</h2>
                        </div>
                </a>
            {/each}
    </div>
</section>



<style>
    section {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    .container {
        position: absolute;
        width: 400%;
        height: 400%;
        top: 0;
        left: 0;
        background-image: url("newcolors.svg");
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 1;
    }
    .container:active {
        cursor: grabbing;
    }
    .card {
        position: absolute;
        cursor: pointer;
    }
    .card-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        margin-top: 1.6rem;
    }
    h2 {
        font-family: "Righteous", sans-serif;
        font-size: 5rem;
        color: var(--yellow);
    }
    /* img {
        width: 7rem;
        height: auto;
    } */
    a{
    all: unset;
  }
  
</style>