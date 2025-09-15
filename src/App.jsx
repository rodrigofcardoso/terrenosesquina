import React, { useState, useEffect } from 'react';
import './App.css';
import { Phone, MapPin, Building, Users, TrendingUp, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react';

// Importar imagens
import logoFirenze from './assets/LOGOFIRENZE01.png';
import aerialView from './assets/firenze-torres-aerial.png';
import plotDiagram from './assets/plot-diagram.png';
import centerImage from './assets/center-commercial.jpeg';



function App() {
  useEffect(() => {
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:6520665,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logoFirenze} alt="Firenze" className="h-12 w-auto" style={{ height: '3rem', width: 'auto' }} />
          </div>
          
          <nav className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('oportunidade')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              Oportunidade
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Localização
            </button>
            <button onClick={() => scrollToSection('investimento')} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Investimento
            </button>
            <button onClick={() => scrollToSection('contato')} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              Contato
            </button>
          </nav>

          <a 
            href="https://wa.me/5553991444503" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Oferta Limitada Banner */}
          <div className="bg-red-600 text-white text-center px-10 py-3 rounded-lg mb-8 animate-pulse flex justify-center" style={{width: '100%'}}>
            <span className="text-2xl font-bold">🔥 OFERTA LIMITADA - APENAS R$ 220.000</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                A OPORTUNIDADE QUE TODO
                <span className="text-yellow-400 block">EMPREENDEDOR</span>
                ESTAVA ESPERANDO
              </h1>
              <p className="text-xl mb-8">
                750m² na esquina do maior empreendimento de Bagé<br />
                Desconto de R$ 70.000 para venda rápida
              </p>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="text-center">
                  <div className="text-gray-300 line-through text-lg">R$ 290.000</div>
                  <div className="text-sm text-gray-400">Valor de Mercado</div>
                </div>
                <ArrowRight className="text-yellow-400" size={32} />
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">R$ 220.000</div>
                  <div className="text-sm text-green-300">OFERTA ESPECIAL</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <button 
                  onClick={openModal}
                  className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>QUERO ESSA OPORTUNIDADE</span>
                </button>
                <button 
                  onClick={() => scrollToSection('detalhes')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  VER DETALHES
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que é uma oportunidade única */}
      <section id="oportunidade" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              POR QUE ESSA É UMA OPORTUNIDADE ÚNICA?
            </h2>
            <p className="text-xl text-gray-600">
              Localização única, preço imbatível e momento perfeito para empreendedores visionários
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aerialView} 
                alt="Localização estratégica" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Na Porta do Maior Empreendimento de Bagé
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">Torres da Guarda</h4>
                    <p className="text-gray-600">352 apartamentos em construção (49% concluído)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">Villa de Mil Amores</h4>
                    <p className="text-gray-600">140 residências anexas ao empreendimento</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">UNIPAMPA</h4>
                    <p className="text-gray-600">1.882 alunos + professores e funcionários</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">Portezuelo Condomínio</h4>
                    <p className="text-gray-600">215 lotes de alto padrão na região</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">Província La Pampa</h4>
                    <p className="text-gray-600">Empreendimento consolidado na Avenida do Saber</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números que impressionam */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            NÚMEROS QUE IMPRESSIONAM
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">750m²</div>
              <div className="text-gray-600">Área Total</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2.500+</div>
              <div className="text-gray-600">Futuros Moradores</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">R$ 70k</div>
              <div className="text-gray-600">Desconto Aplicado</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Potencial de ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Estratégica */}
      <section id="localizacao" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              LOCALIZAÇÃO ESTRATÉGICA
            </h2>
            <p className="text-xl text-gray-600">
              No epicentro do desenvolvimento urbano de Bagé
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Dois Terrenos = Uma Esquina Completa
              </h3>

              <img 
                src={plotDiagram} 
                alt="Croqui dos terrenos" 
                className="rounded-lg shadow-lg w-full mb-6"
              />

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-red-500" size={20} />
                  <span className="text-gray-700">Matrículas 69.647 e 69.646</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="text-blue-500" size={20} />
                  <span className="text-gray-700">Esquina de alta visibilidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-green-500" size={20} />
                  <span className="text-gray-700">Fluxo intenso de pessoas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-purple-500" size={20} />
                  <span className="text-gray-700">Região em franca valorização</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-start space-x-3">
                <div className="text-yellow-500 text-2xl">⚡</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">VANTAGEM COMPETITIVA</h4>
                  <p className="text-gray-700">
                    Único terreno comercial disponível na entrada do maior empreendimento da cidade. 
                    Quando os moradores chegarem, você já estará lá!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Exata */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              LOCALIZAÇÃO EXATA
            </h2>
            <p className="text-xl text-gray-600">
              Veja a localização privilegiada dos terrenos no mapa interativo
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <MapPin className="text-blue-500 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Endereço</h3>
              <p className="text-gray-600">
                Entrada do Torres da Guarda<br />
                Bairro Industrial I, Bagé/RS
              </p>
            </div>

            <div className="text-center">
              <Building className="text-green-500 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Referências</h3>
              <p className="text-gray-600">
                Próximo à UNIPAMPA<br />
                Ao lado do Torres da Guarda
              </p>
            </div>

            <div className="text-center">
              <Users className="text-purple-500 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Acesso</h3>
              <p className="text-gray-600">
                Fácil acesso por vias principais<br />
                Estacionamento disponível
              </p>
            </div>

            <div className="text-center">
              <Star className="text-orange-500 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Coordenadas</h3>
              <p className="text-gray-600">
                750m² (25m x 30m)<br />
                Esquina completa
              </p>
            </div>
          </div>

          {/* Mapa do Google */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.8!2d-54.1!3d-31.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE4JzAwLjAiUyA1NMKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1696400000000!5m2!1spt-BR!2sbr&q=Torres+da+Guarda+de+São+Sebastião,+Mód.+I+-+Bagé+-+RS"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização dos Terrenos Torres da Guarda"
            ></iframe>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mt-8">
            <div className="flex items-start space-x-3">
              <div className="text-yellow-500 text-2xl">📍</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">COORDENADAS EXATAS</h4>
                <p className="text-gray-700">
                  <strong>Terreno 1 (Matrícula 69.647):</strong> Esquina estratégica na entrada principal<br />
                  <strong>Terreno 2 (Matrícula 69.646):</strong> Lote adjacente completando a esquina<br />
                  <strong>Área Total:</strong> 750m² (25m x 30m)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Análise de Investimento */}
      <section id="investimento" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ANÁLISE DE INVESTIMENTO
            </h2>
            <p className="text-xl text-gray-600">
              Números que comprovam o potencial extraordinário deste investimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-green-700 mb-4">PREÇO DE MERCADO</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-4">R$ 290.000</div>
              <p className="text-lg text-gray-700 mb-2">Avaliação por imobiliárias</p>
              <p className="text-base text-gray-500">R$ 386,67/m²</p>
            </div>

            <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-red-700 mb-4">NOSSA OFERTA</h3>
              <div className="text-4xl font-extrabold text-red-700 mb-4">R$ 220.000</div>
              <p className="text-lg text-gray-700 mb-2">Preço promocional</p>
              <p className="text-base text-gray-500">R$ 293,33/m²</p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">SUA ECONOMIA</h3>
              <div className="text-4xl font-extrabold text-blue-700 mb-4">R$ 70.000</div>
              <p className="text-lg text-gray-700 mb-2">Desconto imediato</p>
              <p className="text-base text-gray-500">24% de economia</p>
            </div>
          </div>

          {/* Potencial de Negócios */}
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              POTENCIAL DE NEGÓCIOS
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">🏪</div>
                  <h4 className="font-bold text-gray-800">Mini Shopping</h4>
                  <p className="text-sm text-gray-600">4-6 lojas para locação</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">🍕</div>
                  <h4 className="font-bold text-gray-800">Restaurante</h4>
                  <p className="text-sm text-gray-600">Público cativo garantido</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">💪</div>
                  <h4 className="font-bold text-gray-800">Academia</h4>
                  <p className="text-sm text-gray-600">Complemento aos condomínios</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">🏥</div>
                  <h4 className="font-bold text-gray-800">Clínica</h4>
                  <p className="text-sm text-gray-600">Serviços de saúde</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">🧺</div>
                  <h4 className="font-bold text-gray-800">Lavanderia</h4>
                  <p className="text-sm text-gray-600">Serviço essencial</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">💊</div>
                  <h4 className="font-bold text-gray-800">Farmácia</h4>
                  <p className="text-sm text-gray-600">Medicamentos e conveniência</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">🐕</div>
                  <h4 className="font-bold text-gray-800">Pet Shop</h4>
                  <p className="text-sm text-gray-600">Cuidados para animais</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">🥖</div>
                  <h4 className="font-bold text-gray-800">Padaria</h4>
                  <p className="text-sm text-gray-600">Pães frescos diários</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">🛒</div>
                  <h4 className="font-bold text-gray-800">Mercado</h4>
                  <p className="text-sm text-gray-600">Produtos do dia a dia</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <div className="text-3xl mb-2">🚗</div>
                  <h4 className="font-bold text-gray-800">Estacionamento</h4>
                  <p className="text-sm text-gray-600">Grande demanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Potencial de Construção */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              POTENCIAL DE CONSTRUÇÃO
            </h2>
            <p className="text-xl text-gray-600">
              Construa um centro comercial moderno a baixo custo e maximize o potencial da área
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={centerImage} 
                alt="Centro comercial moderno" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Centro Comercial Integrado
              </h3>

              <p className="text-gray-700 mb-6">
                Com 750m² de área total, você pode construir um moderno centro comercial que atenda toda a demanda da região. 
                A localização estratégica permite máximo aproveitamento do espaço com construção econômica e alta rentabilidade.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">Construção Modular</h4>
                    <p className="text-gray-600">Sistema construtivo econômico e rápido</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">Múltiplos Negócios</h4>
                    <p className="text-gray-600">8-12 lojas em um só empreendimento</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">Área de Convivência</h4>
                    <p className="text-gray-600">Espaços externos para alimentação e lazer</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-800">Estacionamento Amplo</h4>
                    <p className="text-gray-600">Facilidade de acesso para todos os clientes</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-500 text-2xl">💡</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">VANTAGEM ÚNICA</h4>
                    <p className="text-gray-700">
                      Com o investimento inicial de apenas R$ 220.000 no terreno, você pode construir um centro comercial 
                      moderno que gerará renda mensal de R$ 15.000 a R$ 25.000 com múltiplas lojas alugadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            NÃO PERCA ESTA OPORTUNIDADE!
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Terrenos como este aparecem uma vez na vida. Com desconto de R$ 70.000 e possibilidade de aceitar veículo na negociação, é o momento de agir.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button 
              onClick={openModal}
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Phone size={24} />
              <span>FALAR COM ESPECIALISTA</span>
            </button>

            <div className="text-center">
              <div className="text-lg font-bold">📞 Ligação direta</div>
              <div className="text-2xl font-bold">(53) 99144-4503</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={logoFirenze} alt="Firenze" className="h-12 w-auto" />
          </div>
          <p className="text-gray-400">
            © 2025 Firenze Incorporações Imobiliárias. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 mt-2">
            Contato: (53) 99144-4503 | firenze@firenze.com.br
          </p>
        </div>
      </footer>

      {/* Modal de Contato */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Entre em Contato
            </h3>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/5553991444503?text=Olá! Tenho interesse nos terrenos Torres da Guarda. Gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                💬 WhatsApp: (53) 99144-4503
              </a>
              
              <a 
                href="tel:+5553991444503"
                className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                📞 Ligar: (53) 99144-4503
              </a>
              
              <a 
                href="mailto:contato@firenze.com.br?subject=Interesse nos Terrenos Torres da Guarda"
                className="block w-full bg-purple-500 text-white text-center py-3 rounded-lg hover:bg-purple-600 transition-colors"
              >
                ✉️ E-mail: contato@firenze.com.br
              </a>
            </div>

            <button 
              onClick={closeModal}
              className="w-full mt-6 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
