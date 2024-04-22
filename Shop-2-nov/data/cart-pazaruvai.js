export let cartPazaruvai=JSON.parse(localStorage.getItem(`ggg`)) || [];




export function local(){
    localStorage.setItem(`ggg`,JSON.stringify(cartPazaruvai))
}