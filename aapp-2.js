const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

// Flujo secundario personalizado para servicios adicionales
const flowSitiosBasicosSecundario = addKeyword(['detalles', 'info', 'extra'])
    .addAnswer('📋 Nuestros sitios web básicos incluyen 3 páginas estáticas. Tiempo de entrega: 5 días hábiles.');

// Flujo principal para sitios web básicos
const flowSitiosBasicos = addKeyword(['1', 'basico'])
    .addAnswer('🌐 Sitios básicos con SEO básico. Precio: *$1,800 MXN*.', null, null, [flowSitiosBasicosSecundario]);

// Flujo secundario para sitios avanzados
const flowSitiosAvanzadosSecundario = addKeyword(['mas detalles', 'características avanzadas'])
    .addAnswer('📋 Sitios avanzados incluyen 6 páginas y animaciones modernas. Tiempo de entrega: 10 días hábiles.');

// Flujo principal para sitios web avanzados
const flowSitiosAvanzados = addKeyword(['2', 'avanzado'])
    .addAnswer('🌐 Sitios avanzados con SEO optimizado. Precio: *$6,475 MXN*.', null, null, [flowSitiosAvanzadosSecundario]);

// Flujo secundario para backend
const flowSitiosBackendSecundario = addKeyword(['plataformas integradas'])
    .addAnswer('🔗 Sitios con backend incluyen integraciones como Amazon y Shopify.');

// Flujo principal para sitios con backend
const flowSitiosBackend = addKeyword(['3', 'backend'])
    .addAnswer('🛒 Sitios con backend y e-commerce. Precio: *$15,000 MXN*.', null, null, [flowSitiosBackendSecundario]);

// Flujo para SEO
const flowSEO = addKeyword(['4', 'seo'])
    .addAnswer('🔍 Mejora la visibilidad de tu página con SEO.', null, null, []);

// Flujo secundario para marketing
const flowMarketingSecundario = addKeyword(['estrategias sociales'])
    .addAnswer('📱 Ofrecemos campañas publicitarias y optimización de perfiles sociales.');

// Flujo principal para marketing digital
const flowMarketing = addKeyword(['5', 'marketing'])
    .addAnswer('📱 Servicios de marketing digital y redes sociales.', null, null, [flowMarketingSecundario]);

// Flujo secundario para bots
const flowBotsSecundario = addKeyword(['automatización avanzada'])
    .addAnswer('🤖 Bots para atención al cliente y ventas automatizadas.');

// Flujo principal para bots
const flowBots = addKeyword(['6', 'bots'])
    .addAnswer('🤖 Bots personalizados para redes sociales.', null, null, [flowBotsSecundario]);

// Flujo para cotizaciones
const flowCotizacion = addKeyword(['cotización', 'precio'])
    .addAnswer('📝 Servicios disponibles:\n👉 *1* Sitios web básicos\n👉 *2* Sitios avanzados\n👉 *3* Backend\n👉 *4* SEO\n👉 *5* Marketing\n👉 *6* Bots', null, null, [
        flowSitiosBasicos, flowSitiosAvanzados, flowSitiosBackend, flowSEO, flowMarketing, flowBots]);

// Flujo principal de bienvenida
const flowBienvenida = addKeyword(['hola', 'buenos dias'])
    .addAnswer('🙌 ¡Hola! Bienvenido. Aquí te ayudamos a mejorar tu presencia digital.', null, null, [flowCotizacion])
    .addAnswer(async (ctx, { provider }) => {
        await provider.sendImage(ctx.from, 'https://example.com/bienvenida.png', '¡Bienvenido a nuestro servicio!');
    });

// Función principal para inicializar el bot
const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowBienvenida]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb(); // Genera el código QR para conectar a WhatsApp Web
};

main();
