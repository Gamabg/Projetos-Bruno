function Main() {
    return (
        <main>

            <div className="header-content">
                <h1>Bruno Gama Masseiras</h1>
                <br />
                <img src="https://avatars.githubusercontent.com/u/106169955?v=4" className="foto" alt="Foto de perfil" style={{ marginLeft: '500px', width: '200px', height: '200px', display: 'flex', alignItems: 'center' }} />
                <br />
                <div className="descricao">
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                        Sou Bruno Gama, sou um programador Front End,
                        tenho experiência como Monitor de T.I, atuava em labs
                        de informática, trocava senhas e desbloqueava no sistema.
                    </p>
                </div>
            </div>

            <div className="slider" style={{ paddingTop: '150px' }}>
                <section className="skills">
                    <div className="skill-card">
                        <div className="skill-title">
                            Front End
                        </div>
                        <div className="skill-description">
                            <p style={{ color: '#000' }}>HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-title">
                            Monitor de T.I.
                        </div>
                        <div className="skill-description">
                            <p style={{ color: '#000' }}>Resolução de problemas, Suporte técnico, Gerenciamento de redes</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container">
                <form action="#" method="POST">
                    <h2>Entre em Contato</h2>
                    <div className="input-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default Main
