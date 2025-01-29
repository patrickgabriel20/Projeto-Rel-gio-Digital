function atualizarRelogio() {
    var data = new Date();

    // Pegando o horário local
    var horas = formatarNumero(data.getHours());
    var minutos = formatarNumero(data.getMinutes());
    var segundos = formatarNumero(data.getSeconds());

    // Atualiza o relógio principal
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    // Atualiza os horários de outros países
    atualizarHorarioMundial();
}

function atualizarHorarioMundial() {
    var data = new Date();

    // Obtendo horários em diferentes fusos
    var nyTime = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data);
    var londonTime = new Intl.DateTimeFormat('pt-BR', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data);
    var tokyoTime = new Intl.DateTimeFormat('pt-BR', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data);

    // Atualiza os elementos HTML
    document.getElementById('nyTime').textContent = 'Nova York: ' + nyTime;
    document.getElementById('londonTime').textContent = 'Londres: ' + londonTime;
    document.getElementById('tokyoTime').textContent = 'Tóquio: ' + tokyoTime;
}

// Função para formatar números menores que 10 (adiciona zero à esquerda)
function formatarNumero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Atualiza os relógios a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();
