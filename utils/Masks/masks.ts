const maskCurrency = (value: number) => {
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
};

export { maskCurrency };
