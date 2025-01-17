const form = document.querySelector("main");
const btn = document.querySelector("button");

form.addEventListener("mousemove", (e) => {
	const rect = btn.getBoundingClientRect();
	const xMove = e.clientX < rect.left + rect.width / 2 ? 30 : -30;
	const yMove = e.clientY < rect.top + rect.height / 2 ? 30 : -30;
	btn.style.transform = `translate(${xMove}px, ${yMove}px)`;

	btn.style.boxShadow = `0px 4px 10px rgba(216, 216, 216)`;
});
