// Selecting The Container.
const container = document.querySelector('.container');
// The Scroll Event.
window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
    console.log('scrollHeight is: ', scrollHeight); // entire height (pixels + padding) of specified element (DOM)
    console.log('scrollTop is: ', scrollTop); // # of pixels the specified element has been scrolled vertically so far
    console.log('clientHeight is: ', clientHeight); // viewable height of the spepcified element (DOM)
    console.log('scrollTop + clientHeight is: ', scrollTop+clientHeight)
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(createPost,2000);

	}
});
// The createPost function creates The HTML for the blog post.
// It append it to the container.
function createPost(){
    
	// const post = document.createElement('div');
	// post.className = 'text';
	// post.innerHTML = `<h1>Lorem ipsum dolor sit amet</h1>
	// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eos, atque sed saepe
	//    tempore, sequi qui excepturi voluptate ut perspiciatis culpa sit harum, corrupti ullam 
	//    voluptatibus obcaecati sint dignissimos quas.</p>`;
//   Appending the post to the container.
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    let randomNumber = getRandomInt(1000);

    const newImage = new Image(400, 300);
    newImage.className = 'text'
    newImage.src = `https://picsum.photos/id/${randomNumber}/400/300`
//	container.appendChild(post);
    container.appendChild(newImage);
}