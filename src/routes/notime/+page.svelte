<script>
  export let data
  import {
    BackButton,
    AboutSection,
    ContactSection,
    EducationSection,
    ExperienceSection,
    SkillSection,
  } from '$lib/index'
  import NoTimeImage from '../../lib/components/atoms/NoTimeImage.svelte'
</script>

<BackButton />
<section>
  <h1>{data.notimes[0].title}</h1>
  <span>My resume in one overview</span>
  <div class="grid-container">
    <div class="image"><NoTimeImage /></div>
    <div class="about"><AboutSection /></div>
    <div class="skill"><SkillSection skills={data.notimes[0].skills} /></div>
    <div class="education"><EducationSection education={data.notimes[0].education} /></div>
    <div class="experience">
      <ExperienceSection work={data.notimes[0].work} />
    </div>
    <div class="contact"><ContactSection /></div>
  </div>
</section>

<style>
  section {
    background-color: var(--darkpurple-background);
    padding: 2rem;
    height: auto;
  }

  h1 {
    color: var(--lightpink);
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  span {
    color: white;
    text-transform: none;
    display: block;
    margin-bottom: 2rem;
  }

  /* medium screen */
  @media screen and (min-width: 56.3em) {
    h1 {
      font-size: 4rem;
    }
    span {
      font-size: 1.5rem;
    }
    .grid-container {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      column-gap: 2rem;
      row-gap: 3rem;
      grid-template-areas:
        'image about'
        'skill experience'
        'education contact';
    }

    .image {
      grid-area: image;
    }

    .about {
      grid-area: about;
    }
    .skill {
      grid-area: skill;
    }
    .education {
      grid-area: education;
    }
    .experience {
      grid-area: experience;
    }
    .contact {
      grid-area: contact;
    }

    /* full screen */
    @media screen and (min-width: 75em) {
      section {
        padding: 3rem;
      }
      .grid-container {
        column-gap: 12rem;
      }
    }
  }
</style>
