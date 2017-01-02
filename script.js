/* Delay visual feedback for invalid form items until initial submit or blur event */
Array.from(document.querySelectorAll('.form-element input, .form-element select, .form-element textarea')).forEach(i => {
	i.addEventListener('invalid', () => {
		i.dataset.touched = true
	})
	i.addEventListener('blur', () => {
		if (i.validity.valid === false) i.dataset.touched = true
	})
})