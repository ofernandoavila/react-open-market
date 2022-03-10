import '../styles/footer.scss';

export function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="menu-group">
                    <div className="menu-item">
                        <h2>Conta</h2>
                        <ul>
                            <li>Minha conta</li>
                            <li>Meus pedidos</li>
                            <li>Meus endereços</li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <h2>Produtos</h2>
                        <ul>
                            <li>Buscar produto</li>
                            <li>Mais vendidos</li>
                            <li>Melhores avaliações</li>
                            <li>Entrega rápida</li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <h2>Institucional</h2>
                        <ul>
                            <li>Sobre a empresa</li>
                            <li>Entre em contato</li>
                            <li>Faça uma avaliação</li>
                        </ul>
                    </div>
                </div>
                <p className="signature">Todos os direitos reservados | 2022</p>
            </div>
        </footer>
    );
}