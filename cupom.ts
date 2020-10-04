import { Loja } from "./loja";

function isEmpty(str: string): boolean {
	let spaceCount = str.length - str.replace(" ", "").length;
	return str == null || spaceCount == str.length;
}

function verifica_loja(loja: Loja) {
	if (isEmpty(loja.nome_loja)) {
		throw new Error(`O campo nome da loja é obrigatório`);
	}

	if (isEmpty(loja.logradouro)) {
		throw new Error(`O campo logradouro do endereço é obrigatório`);
	}

	if (isEmpty(loja.municipio)) {
		throw new Error(`O campo município do endereço é obrigatório`);
	}

	if (isEmpty(loja.estado)) {
		throw new Error(`O campo estado do endereço é obrigatório`);
	}

	if (isEmpty(loja.cnpj)) {
		throw new Error(`O campo CNPJ da loja é obrigatório`);
	}

	if (isEmpty(loja.inscricao_estadual)) {
		throw new Error(`O campo inscrição estadual da loja é obrigatório`);
	}
}

export function dados_loja_objeto(loja: Loja) {
	// Implemente aqui
	verifica_loja(loja);

	let numeroStr: string = loja.numero <= 0 ? "s/n" : loja.numero.toString();

	let ln2: string = `${loja.logradouro}, ${numeroStr}`;
	ln2 += isEmpty(loja.complemento) ? "" : ` ${loja.complemento}`;
	ln2 += "\n";

	let ln3 = isEmpty(loja.bairro) ? "" : `${loja.bairro} - `;
	ln3 += `${loja.municipio} - ${loja.estado}\n`;

	let ln4 = isEmpty(loja.cep) ? "" : `CEP:${loja.cep}`;
	if (!isEmpty(loja.telefone)) {
		ln4 += isEmpty(ln4) ? "" : " ";
		ln4 += `Tel ${loja.telefone}`;
	}
	ln4 += isEmpty(ln4) ? "" : "\n";

	let ln5 = isEmpty(loja.observacao) ? "" : `${loja.observacao}`;
	ln5 += "\n";

	let output = loja.nome_loja + "\n";
	output += `${ln2}`;
	output += `${ln3}`;
	output += `${ln4}`;
	output += `${ln5}`;
	output += `CNPJ: ${loja.cnpj}\n`;
	output += `IE: ${loja.inscricao_estadual}\n`;

	return output;
}
