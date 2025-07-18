var typed = new Typed(".role", {
    strings: ["Frontend Developer", "Web Developer", "CyberSecurity Analyst", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

const cls=["tech","home","about","contact"];

// Initialize all sections as inactive on page load
cls.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.classList.remove('active');
  }
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('logo-box-anime');
        console.log("hi");
      } 
    });
  },
  { threshold: 0.3} // Reduced threshold for better trigger timing
);


const targets = document.getElementsByClassName("logo-box");
Array.from(targets).forEach(target => {
  observer.observe(target);
});

 let currentBox = 1;
        
        setInterval(() => {
            // Remove glow from all rings
          document.getElementById('box1').classList.remove('gold');
          document.getElementById('box2').classList.remove('gold');
          document.getElementById('box3').classList.remove('gold');
            
            
            // Add glow to current ring
            document.getElementById(`box${currentBox}`).classList.toggle('gold');
            
            // Move to next ring
            currentBox = currentBox < 3 ? currentBox + 1 : 1;
        }, 1500);
