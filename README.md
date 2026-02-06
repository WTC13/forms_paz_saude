# 📝 Formulário Interativo de Captação (Lead Gen) - Paz Consultoria

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![Padrão](https://img.shields.io/badge/Arquitetura-MVC-blue)
![UX](https://img.shields.io/badge/Foco-Experi%C3%AAncia%20do%20Usu%C3%A1rio-orange)

## 🕊️ Sobre o Projeto
Este projeto redefine a experiência de preenchimento de formulários tradicionais. Desenvolvido para a **Paz Consultoria**, o sistema utiliza gatilhos de interatividade e gamificação para reduzir a carga cognitiva do usuário, transformando a coleta de dados em uma jornada fluida que prioriza a conversão e a entrega de leads qualificados.

O diferencial está na **retenção por dopamina**: em vez de um formulário estático e cansativo, o usuário interage com uma interface dinâmica onde cada etapa concluída gera um reforço visual de progresso, aumentando drasticamente a taxa de finalização (completion rate).

---

## 🚀 Funcionalidades Principais
* **Interface Step-by-Step:** Navegação intuitiva que evita o abandono.
* **Validação em Tempo Real:** Sistema de segurança que impede campos vazios ou formatos de dados incorretos (e-mail, telefone, etc).
* **Gatilhos de Dopamina:** Micro-interações projetadas para manter o engajamento até a última pergunta.
* **Notificações Automatizadas:** Integração com serviço de e-mail (SMTP) para alerta imediato de novo cadastro para o administrador.
* **Direct-to-WhatsApp:** Redirecionamento inteligente para o WhatsApp do responsável logo após o envio, otimizando o tempo de resposta comercial.

---

## 🏗️ Arquitetura e Metodologia
O projeto foi estruturado utilizando o padrão **MVC (Model-View-Controller)**, garantindo uma base de código organizada e escalável:

* **Model:** Gerencia a integridade dos dados e as regras de negócio das validações.
* **View:** Interface rica em UX, focada em componentes interativos e responsivos.
* **Controller:** Responsável por orquestrar o fluxo de dados, gerenciar as trocas de estados das perguntas e acionar as APIs de comunicação (E-mail/WhatsApp).

---

## 🛠️ Tecnologias e Ferramentas

### **Frontend:**
* **HTML5 / CSS3:** Estrutura semântica e estilização moderna com foco em responsividade.
* **JavaScript (ES6+):** Lógica de transição de telas, manipulação de DOM e validações dinâmicas.
* **UX/UI Design:** Foco em micro-interações e feedback visual.

### **Backend & Integrações:**
* **Serviço de E-mail:** Integração via Web3forms para notificações em tempo real.
* **WhatsApp API:** Geração de link dinâmico para transição direta entre formulário e chat.

---

## 🔧 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Configuração de Ambiente:**
    * Certifique-se de ter um ambiente de servidor local configurado (como Apache/XAMPP ou um servidor Node.js).
    * Configure as credenciais de SMTP no arquivo de configuração correspondente.

3.  **Acesse o projeto:**
    * Abra o navegador e acesse `http://localhost/nome-do-projeto`.

---

## 🧠 Decisões de Design
A identidade visual foi construída para passar **credibilidade e leveza**. O uso de elementos geométricos (estilo origami) no logo da Paz Consultoria serviu de inspiração para as transições de tela, criando uma unidade visual em todo o projeto.

---

## 👤 Autor
Desenvolvido com ☕ e código por **Wendell Timóteo**.

---
*Este projeto faz parte do meu portfólio de soluções focadas em UX e Conversão.*
