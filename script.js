/* Delay visual feedback fro invalid form items untail initial submit or blur event */
Array.from(document.querySelectorAll('.form-element input')).forEach(i => {
	i.addEventListener('invalid', () => {
		i.dataset.touched = true
	})
	i.addEventListener('blur', () => {
		if (i.value != '') i.dataset.touched = true
	})
})