
function updateTotal() {

    let total = 0;
    total = parseFloat(total) + parseFloat($('#val500').val()) * 500
    $('#sum500').text(parseFloat($('#val500').val()) * 500 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val200').val()) * 200
    $('#sum200').text(parseFloat($('#val200').val()) * 200 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val100').val()) * 100
    $('#sum100').text(parseFloat($('#val100').val()) * 100 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val50').val()) * 50
    $('#sum50').text(parseFloat($('#val50').val()) * 50 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val20').val()) * 20
    $('#sum20').text(parseFloat($('#val20').val()) * 20 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val10').val()) * 10
    $('#sum10').text(parseFloat($('#val10').val()) * 10 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val5').val()) * 5
    $('#sum5').text(parseFloat($('#val5').val()) * 5 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val2').val()) * 2
    $('#sum2').text(parseFloat($('#val2').val()) * 2 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val1').val()) * 1
    $('#sum1').text(parseFloat($('#val1').val()) * 1 + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val050').val()) * 0.5
    $('#sum050').text((parseFloat($('#val050').val()) * 0.5).toFixed(2).replace('.00', '') + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val020').val()) * 0.2
    $('#sum020').text((parseFloat($('#val020').val()) * 0.2).toFixed(2).replace('.00', '') + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val010').val()) * 0.1
    $('#sum010').text((parseFloat($('#val010').val()) * 0.1).toFixed(2).replace('.00', '') + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val005').val()) * 0.05
    $('#sum005').text((parseFloat($('#val005').val()) * 0.05).toFixed(2).replace('.00', '') + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val002').val()) * 0.02
    $('#sum002').text((parseFloat($('#val002').val()) * 0.02).toFixed(2).replace('.00', '') + ' PLN')
    
    total = parseFloat(total) + parseFloat($('#val001').val()) * 0.01
    $('#sum001').text((parseFloat($('#val001').val()) * 0.01).toFixed(2).replace('.00', '') + ' PLN')

    let roundedValue = parseFloat(total).toFixed(2);

    let parts = roundedValue.split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1];

    if (integerPart.length > 4) { integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

    let displayValue = integerPart;

    if (decimalPart !== "00") {
        displayValue += '.' + decimalPart;
    }

    displayValue += ' PLN';

    $('#total').text(displayValue);
}

function plus(value) {
    if (value >= 1 && parseInt($('#val' + value).val()) < 999999) {
        $('#val' + value).val(parseInt($('#val' + value).val()) + 1)
        updateTotal()
    } else {
        let elementName = parseFloat(value).toFixed(2).toString().replace('.', '')
        $('#val' + elementName).val(parseInt($('#val' + elementName).val()) + 1)
        updateTotal()

    }
}

function minus(value) {
    let total = $('#total').text();
    total = total.toString().replace(' PLN', '');
    total = total.toString().replace(' ', '')
    total = parseFloat(total)

    if (value >= 1) {

        if (parseInt($('#val' + value).val()) < 1) {
            return;
        }

        $('#val' + value).val(parseInt($('#val' + value).val()) - 1)
        total = total - parseFloat(value)
        total = total.toFixed(2)
        updateTotal()

    } else {
        let elementName = parseFloat(value).toFixed(2).toString().replace('.', '')

        if ($('#val' + elementName).val() < 1) {
            return;
        }

        $('#val' + elementName).val(parseInt($('#val' + elementName).val()) - 1)
        updateTotal()

    }
}

$('input').on('input', function() {
    if (!$(this).prop('id').includes('val')) { return; }

    if($(this).val().length > 6) {
        $(this).val($(this).val().slice(0, 6));
    }

$(this).val($(this).val().replace(/[^0-9]/g, ''));
    if (!$(this).val() === '') { updateTotal() }
    
});

$('input').on('blur', function() {
    if ($(this).val() === '') {
        $(this).val('0')
    }

    updateTotal()
})

function resetAll() {
    $('#val500').val('0')
    $('#val200').val('0')
    $('#val100').val('0')
    $('#val50').val('0')
    $('#val20').val('0')
    $('#val10').val('0')
    $('#val5').val('0')
    $('#val2').val('0')
    $('#val1').val('0')
    $('#val050').val('0')
    $('#val020').val('0')
    $('#val010').val('0')
    $('#val005').val('0')
    $('#val002').val('0')
    $('#val001').val('0')
    updateTotal()
}

function copyAll() {

    let toCopy = "";

    if (parseInt($('#val500').val()) > 0) {
        toCopy = toCopy + "500 zł (x" + $('#val500').val() + "): " + $('#sum500').text() + "\n";
    }
    if (parseInt($('#val200').val()) > 0) {
        toCopy = toCopy + "200 zł (x" + $('#val200').val() + "): " + $('#sum200').text() + "\n";
    }
    if (parseInt($('#val100').val()) > 0) {
        toCopy = toCopy + "100 zł (x" + $('#val100').val() + "): " + $('#sum100').text() + "\n";
    }
    if (parseInt($('#val50').val()) > 0) {
        toCopy = toCopy + "50 zł (x" + $('#val50').val() + "): " + $('#sum50').text() + "\n";
    }
    if (parseInt($('#val20').val()) > 0) {
        toCopy = toCopy + "20 zł (x" + $('#val20').val() + "): " + $('#sum20').text() + "\n";
    }
    if (parseInt($('#val10').val()) > 0) {
        toCopy = toCopy + "10 zł (x" + $('#val10').val() + "): " + $('#sum10').text() + "\n";
    }
    if (parseInt($('#val5').val()) > 0) {
        toCopy = toCopy + "5 zł (x" + $('#val5').val() + "): " + $('#sum5').text() + "\n";
    }
    if (parseInt($('#val2').val()) > 0) {
        toCopy = toCopy + "2 zł (x" + $('#val2').val() + "): " + $('#sum2').text() + "\n";
    }
    if (parseInt($('#val1').val()) > 0) {
        toCopy = toCopy + "1 zł (x" + $('#val1').val() + "): " + $('#sum1').text() + "\n";
    }
    if (parseInt($('#val050').val()) > 0) {
        toCopy = toCopy + "0,50 zł (x" + $('#val050').val() + "): " + $('#sum050').text() + "\n";
    }
    if (parseInt($('#val020').val()) > 0) {
        toCopy = toCopy + "0,20 zł (x" + $('#val020').val() + "): " + $('#sum020').text() + "\n";
    }
    if (parseInt($('#val010').val()) > 0) {
        toCopy = toCopy + "0,10 zł (x" + $('#val010').val() + "): " + $('#sum010').text() + "\n";
    }
    if (parseInt($('#val005').val()) > 0) {
        toCopy = toCopy + "0,05 zł (x" + $('#val005').val() + "): " + $('#sum005').text() + "\n";
    }
    if (parseInt($('#val002').val()) > 0) {
        toCopy = toCopy + "0,02 zł (x" + $('#val002').val() + "): " + $('#sum002').text() + "\n";
    }
    if (parseInt($('#val001').val()) > 0) {
        toCopy = toCopy + "0,01 zł (x" + $('#val001').val() + "): " + $('#sum001').text() + "\n";
    }

    if(toCopy !== "") {
        toCopy = toCopy + "\nSuma: " + $('#total').text();
        navigator.clipboard.writeText(toCopy);

        $('#btn-copy').html('<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>')

        setTimeout(function() {
        $('#btn-copy').html('<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>')
        }, 800)
    }

}
