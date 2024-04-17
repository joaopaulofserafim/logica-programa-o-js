# Setup inicial de um repositório do GitHub no Visual Studio Code local 

1. Limpar credencias do sistema.
2 Limpar os dados do navegador.
3. Abrir o repositorio do GitHub 
4. Copiar a url do repositório (HTTPS)
5. Abir o VS Code 
6. Se houver algum projeto aberto no VS Code, então feche (CTRL + K  F)
7. Se houver algum usuário logado no VS Code, então clique em sair .
8. Verifique as variáveis `user.name` e `user.email` globais:

~~~bash
git config --global user.name
git config --global user.email
~~~
9. Se as variáveis retornarem algum valor, redefina ambas a variáveis:

~~~bash
git config --unset user.name
git config --unset user.email
~~~
10. Faça a clonagem do repositório no computador local:

~~~bash
git clone https://github.com/<usuario><repositório>.git
~~~
11. Abra o projeto clonado no VS Code :
~~~bash
code -r <repositorio_local>/
~~~
12. Faça login no VS Code para sincronizar suas extensões e temas.
13. Ative o salvamento automático _(Autosave)_: Arquivo > Salvamento automático.