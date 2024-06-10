const arrayOfQuotes = [
    {'Status': 'سيئ', 
     'pass': '12345678.'
    },
    {'Status': 'ليس سيئ', 
     'pass': '11223344'
    },
    {'Status': 'طبيعي', 
     'pass': 'mahmoud'
    },
    {'Status': 'جيد', 
     'pass': '1234mahmouh'
    },
    {'Status': 'جيد جداً', 
     'pass': '112233mahmoud'
    },
    {'Status': 'ممتازة', 
     'pass': '6541896532+aetg4fsr8653fwr'
    },
];

let usedPasswords = [];

function Suggest_a_password() {
    let random;
    do {
        random = Math.floor(Math.random() * arrayOfQuotes.length);
    } while (usedPasswords.includes(arrayOfQuotes[random].pass));
    usedPasswords.push(arrayOfQuotes[random].pass);
    document.querySelector('#Status').textContent = `\"${arrayOfQuotes[random].Status}\"`;
    document.querySelector('#pass').textContent = `${arrayOfQuotes[random].pass}`;
}
function closed() {
    if(confirm("هل أنت متأكد من رغبتك في إغلاق الصفحة؟")) {
        window.close();
    }
}

