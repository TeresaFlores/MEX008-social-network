let login = {
    render: async () => {
        let view = /* html */ `
         <div class="conteiner">
        
            <form class="login">
        
                <p><img src="https://github.com/JessicaZetina/MEX008-social-network/blob/master/icon/FAVORITO.png?raw=true" alt="imagen-logo" id="logo"></p>
                    <h2>Registro de usuarios </h2> <br>
                    <p>Correo </p>
                    <input id="email" type="email"  placeholder="wanderlust@gmail.com">
                    <p>Contraseña</p>
                    <input id="password" type="password"  pattern=".{6,}" placeholder="contraseña"> <br><br>
                    <button id="btn-registro">Registrarse</button> <br>
                    <p>
                    <input type="submit" value="Google">
                        
                    <h2>Ingreso de usuarios </h2> <br>
                    <p>Correo </p>
                    <input id="email2" type="email"  placeholder="wanderlust@gmail.com">
                    <p>Contraseña</p>
                    <input id="password2" type="password"  pattern=".{6,}" placeholder="contraseña"> <br><br>
                    <button onclick="ingreso()">Ingreso</button>
        
            </form>
            <div id="contenido"></div>

        </div>
        </section> 
        </main>
        `
        return view
    },
        after_render: async () => {
            const btnRegistro = document.getElementById('btn-registro');
            console.log(btnRegistro);
            btnRegistro.addEventListener('click', registro)
            

        }
};
export default login;




