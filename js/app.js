document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }


  const $myParagraphElement = document.createElement('p')
  $myParagraphElement.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore corrupti repellat neque ratione recusandae blanditiis voluptatibus pariatur enim sequi asperiores temporibus eum, reprehenderit velit illum facilis numquam perspiciatis ipsam! Nemo vero deleniti dolores nobis fugiat.'
  $myParagraphElement.classList.add('column', 'is-two-thirds', 'has-text-left', 'is-family-sans-serif')

  const $parentElement = document.querySelector('.content.columns.is-justify-content-space-between.is-align-items-center')
  const $siblingImg = document.querySelector('img[src="https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/make-next-presentation-best-yet-open-graph.jpg"]')

  $parentElement.insertBefore($myParagraphElement, $siblingImg)
});
