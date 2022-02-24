
/**
 * Component Phone
 */
const phoneNumber = '(91) 98765-9134';
// class="container background-grayLight text-right mt-2"
{/* <h6 style="color: inherit;font-weight: 600;">LIGUE-NOS: {{phoneNumber}}</h6> */ }
let div_phone = document.getElementById('div_phone');

let h6 = document.createElement("h6");
h6.setAttribute("style", "color: inherit;font-weight: 600;")
h6.innerText = `LIGUE-NOS: ${phoneNumber}`;

div_phone.appendChild(h6);

/**
 * Component Services
 */
const data = [
    { label1: 'consulta', text1: 'Trabalhamos por agendamento.', label2: 'exames', text2: 'Realizamos exames de Eletrocardiograma + PA, Raspado Cutâneo, PCR, Histopatológico, Teste rápido de Parvovirose e Cinomose, ...' },
    { label1: 'emergência', text1: 'Disponibilizamos serviços com excelência para que seu melhor amigo receba todo os cuidados necessários.', label2: 'cirurgias', text2: 'Avaliação cirúrgica grátis, Internação Pós-Cirúrgico, ...' },
    { label1: 'castração', text1: 'Entre em contato pelo nosso Whatsapp pra obter mais informações.', label2: 'vacinas', text2: 'Entre em contato pelo nosso Whatsapp pra obter mais informações.' },
    { label1: 'medicamentos', text1: 'Entre em contato pelo nosso Whatsapp pra obter mais informações.', label2: 'cuidados dentais', text2: 'Entre em contato pelo nosso Whatsapp pra obter mais informações.' },
    { label1: 'petshop', text1: 'Nosso ambiente possui uma gama de produtos, trazendo consigo conforto, qualidade e um atendimento excepcional.', label2: 'banho e tosa', text2: 'Além de realizarmos os procedimentos de banho e tosa, também fomentamos cursos para que você consiga obter o mesmo conceito de qualidade e expetise para realizar novos desafios.' },
];

let services = document.getElementById("div_services");

data.forEach((item) => {

    let div = document.createElement("div");
    div.setAttribute("class", `row ${item.label1 == 'consulta' ? 'mt-4' : ''} ml-2 text-uppercase`);

    for (let i = 0; i < 2; i++) {

        let div_inter = document.createElement("div");
        div_inter.setAttribute("id", "item-box");
        div_inter.setAttribute("class", "col-6 col-md-6 col-lg-5 item-services");

        let h6 = document.createElement("h6");
        h6.innerHTML = `<i class="icon-chevron-right" style="color: #28ADD1;"></i> ${i == 0 ? item.label1 : item.label2}`;

        let p = document.createElement("p");
        p.innerHTML = `&nbsp;`;

        let p_text = document.createElement("p");
        p_text.setAttribute("style", "font-size:14px; text-transform: none");
        p_text.innerText = `${i == 0 ? item.text1 : item.text2}`;

        div_inter.appendChild(h6);
        if (!item.text1 && !item.text2) {
            div_inter.appendChild(p);
        }
        div_inter.appendChild(p_text);

        div.appendChild(div_inter);
    }

    services.appendChild(div);
});

/**
 * Component About
 */
const about = document.getElementById("div_about_text");

let p = document.createElement("p");
p.setAttribute("style","text-align: justify")
p.innerHTML = `Você ja ouviu falar na CLIVEPAN?<br>
                A clinica veterinária CLIVEPAN é a pioneira no município de Ananindeua-PA com mais de 30 anos no mercado PET.<br>
                Sempre qualificando nossos profissionais e modernizando para melhor atender-los, com eficiência, comprometimento e tecnologias de ponta. 
                Com objetivo de ser referência no seguimento veterinário, melhorando a qualidade de vida dos animais. 
`;

about.appendChild(p);





