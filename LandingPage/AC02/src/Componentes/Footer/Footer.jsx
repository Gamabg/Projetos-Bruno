function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.instagram.com/seu_usuario_instagram"><img
                    src="https://cdn.jsdelivr.net/npm/simple-icons/icons/instagram.svg" alt="Instagram"
                    style={{ width: "50px", height: "50px" }} /></a>
                <a href="https://www.linkedin.com/in/seu_perfil_linkedin"><img
                    src="https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg" alt="LinkedIn"
                    style={{ width: "50px", height: "50px" }} /></a>
                <a href="https://github.com/seu_usuario_github">
                    <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg"
                        alt="GitHub"
                        style={{ width: "50px", height: "50px" }} /></a>
                <a href="https://api.whatsapp.com/send?phone=seu_numero_whatsapp"><img
                    src="https://cdn.jsdelivr.net/npm/simple-icons/icons/whatsapp.svg" alt="WhatsApp"
                    style={{ width: "50px", height: "50px" }} /></a>
            </div>
        </footer>
    )
}

export default Footer
