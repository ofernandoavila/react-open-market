import { Link } from 'react-router-dom';
import '../styles/header.scss';
import '../styles/footer.scss';

export function Header() {
    return (
        <div className="header">
            <header>
                <div className="container">
                    <Link to="/">
                        <h2>E-Commerce</h2>
                    </Link>
                    <input 
                        type="text" 
                        className="search-product" 
                        placeholder='Busque por um produto'
                    />
                    <nav>
                        <ul>
                            <li><Link to={'/auth/login'} >Fazer login</Link></li>
                            <button>
                                <Link to={'/cart'}>
                                    Carrinho
                                </Link>
                            </button>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="categories">
                <div className="container">
                    <nav>
                        <ul>
                            <li>All departaments</li>
                            <li>Cell phones</li>
                            <li>Appliances</li>
                            <li>Computers, Tablets & Accessories</li>
                            <li>Computers</li>
                            <li>TV & Home Theatre</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        
    );
}


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