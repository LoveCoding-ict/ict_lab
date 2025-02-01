// Sample data for each button
const contentData = {
    //ict11
    "btn1": [
        { title: "Kahoot", url: "https://kahoot.it/" },
        { title: "Quizizz", url: "https://quizizz.com/join" }
    ],
    "btn2": [
        { title: "ប្រឡងប្រចាំខែកុម្ភៈ", url: "https://example.com/ict13-doc1.pdf" },
        { title: "ប្រឡងឆមាសទី១", url: "https://example.com/ict13-doc2.pdf" }
    ],
    "btn3": [
        { title: "ពិន្ទុប្រចាំខែវិច្ឆិកា", url: "https://docs.google.com/spreadsheets/d/1i9PnYE2QtFkqg0m1Rrl1tx7POW5QLsfd6uw3Z62-tCo/edit?usp=sharing" },
        { title: "ពិន្ទុប្រចាំខែធ្នូ", url: "https://docs.google.com/spreadsheets/d/1qwLJMThAKnY8MBWDsXZ4v4z30h_J9vzbMSvcBKadIfI/edit?usp=sharing" },
        { title: "ពិន្ទុប្រចាំខែមករា", url: "https://docs.google.com/spreadsheets/d/1GX1RenK-5BofbBNLUtZ8wOGxBsJqR3pR0EdxLWQrHE4/edit?usp=sharing" },
        { title: "ពិន្ទុប្រចាំខែកុម្ភៈ", url: "https://docs.google.com/spreadsheets/d/1HkgfMG7yI-YMCaieNNgZ8tHX4ZMD-GJ0Guj4-7-OQVw/edit?usp=sharing" }
    ],
    "btn4": [
        { title: "មេរៀនទី១", url: "#" },
        { title: "មេរៀនទី២", url: "#" },
        { title: "មេរៀនទី៣", url: "#" },
        { title: "មេរៀនទី៤", url: "#" }
    ],
    "btn5": [
        { title: "ជំពូកទី២ មេរៀនទី១ លិខិតផ្ទាល់ខ្លួន និងស្ថាប័នរដ្ឋ ផ្នែក​ ក", url: "https://drive.google.com/file/d/1M2aRfeiDmh4x5Psfm0U5tUNvrg_dGCQX/view?usp=sharing" },
        { title: "ជំពូកទី២ មេរៀនទី១ លិខិតផ្ទាល់ខ្លួន និងស្ថាប័នរដ្ឋ ផ្នែក​ ខ", url: "https://drive.google.com/file/d/1j_nbgD0wkQbHpE4bpxZIuGwtNDaV906H/view?usp=sharing" },
        { title: "ជំពូកទី២ មេរៀនទី២ លិខិតជំនួញ ផ្នែក​ ក", url: "https://drive.google.com/file/d/1i-5rpRjG5hLfwY8mt-6YrM0fkSZ1cXB4/view?usp=sharing" },
        { title: "ជំពូកទី២ មេរៀនទី៣ ការកត់ត្រា និងរៀបចំព័ត៌មានឱ្យមានរចនាសម្ព័ន្ធ ផ្នែក​ ក", url: "https://drive.google.com/file/d/1SjG1H2Zxkdke-C1G6ICudbgSR4OUPxA5/view?usp=sharing" },
        { title: "មេរៀនទី៤", url: "#" }
    ],
    "btn6": [
        { title: "ជំពូកទី២ ការណែនាំអំពីកម្មវិធីស្លឹករឹត", url: "https://drive.google.com/file/d/19U4Fh7p_1s3_D7dJB9Uhw2KcTCcgz57p/view?usp=sharing" },
        { title: "ជំពូកទី៣ ការងារជាមួយអត្ថបទ និងកថាខណ្ឌ", url: "https://drive.google.com/file/d/1dXYTeNz5Uup4OelhQflP6K4HPDJjIq9_/view?usp=sharing" },
        { title: "ជំពូកទី4 ការងាជាមួយក្រាហ្វិក", url: "https://drive.google.com/file/d/1dzeOICyHbBFqD_tfSgShX12S25sBgg7k/view?usp=sharing" },
        { title: "ជំពូកទី5 ការងារជាមួយទំព័រ", url: "https://drive.google.com/file/d/1fS9YayiTjKmMaICIA95cMvQ-cijW6sIy/view?usp=sharing" }
    ],
  
    "btn7": [
        { title: "ខែកុម្ភៈ", url: "https://docs.google.com/spreadsheets/d/1OHpvaSnGNmFMdENtxXfnkOY9pqcLecsZCG9FZfDptjo/edit?usp=sharing" },
        { title: "ខែមីនា", url: "https://docs.google.com/spreadsheets/d/1j0ToeNKbRrXE8UjenykMHAoRIsFn4faL8zOvEQJkpEQ/edit?usp=sharing" },
        { title: "ខែមេសា", url: "https://docs.google.com/spreadsheets/d/1WLQbw7gQtdiHuVoSg3dTcSgNrGqCigg8YTpC1aMol-A/edit?usp=sharing" },
        { title: "ខែឧសភា", url: "https://docs.google.com/spreadsheets/d/1mSVKsWbCAWpsaGEc0GYtbUgs_se1kgVGoBLsT_ThLnw/edit?usp=sharing" },
        { title: "ខែមិថុនា", url: "https://docs.google.com/spreadsheets/d/1QLZwfcItqnsAyEmv0EIMqPLzqwuIEl2xDvcBeXHbO7M/edit?usp=sharing" },
        { title: "ខែកក្កដា", url: "https://docs.google.com/spreadsheets/d/1e0JOL4QWPkc_sJkbrQ8g9mXnl0W4tOYKRUYICi1MKAM/edit?usp=sharing" },
        { title: "ខែសីហា", url: "https://docs.google.com/spreadsheets/d/1B2LjQMaGuEofzjXjbWOConbFiZhbFsOYOLcQJ3Qsw7Y/edit?usp=sharing" }
    ],
        //ict12
        "btn8": [
            { title: "Kahoot", url: "https://kahoot.it/" },
            { title: "Quizizz", url: "https://quizizz.com/join" }
        ],
        "btn9": [
            { title: "ប្រឡងប្រចាំខែកុម្ភៈ", url: "https://example.com/ict13-doc1.pdf" },
            { title: "ប្រឡងឆមាសទី១", url: "https://example.com/ict13-doc2.pdf" }
        ],
        "btn10": [
            { title: "ពិន្ទុប្រចាំខែវិច្ឆិកា", url: "https://docs.google.com/spreadsheets/d/1ZDVYf9fNiYrzy11kiE50ht_Rve16NkP3F72O4T3DTmY/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែធ្នូ", url: "https://docs.google.com/spreadsheets/d/1-eR_jNFDFzFdk7cS3-YXPsnppIMdSXGkGxTchI_k5Cs/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែមករា", url: "https://docs.google.com/spreadsheets/d/1RnGRGgkHNhPBEng1kL5MusTh9l897UTtC0OWqJVxrr0/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែកុម្ភៈ", url: "https://example.com/ict13-doc1.pdf" }
        ],
        "btn11": [
            { title: "មេរៀនទី១", url: "#" },
            { title: "មេរៀនទី២", url: "#" },
            { title: "មេរៀនទី៣", url: "#" },
            { title: "មេរៀនទី៤", url: "#" }
        ],
        "btn12": [
            { title: "មេរៀនទី១", url: "#" },
            { title: "មេរៀនទី២", url: "#" },
            { title: "មេរៀនទី៣", url: "#" },
            { title: "មេរៀនទី៤", url: "#" }
        ],
        "btn13": [
            { title: "មេរៀនទី១", url: "#" },
            { title: "មេរៀនទី២", url: "#" },
            { title: "មេរៀនទី៣", url: "#" },
            { title: "មេរៀនទី៤", url: "#" }
        ],
        "btn14": [
            { title: "ខែកុម្ភៈ", url: "https://docs.google.com/spreadsheets/d/1oYW1YTzbfRZCI6ATaeEwKUq4DzubBRKImeblp2ZPp8o/edit?usp=sharing" },
            { title: "ខែមីនា", url: "https://docs.google.com/spreadsheets/d/1tVHXFzQDXbaE9-KgK5QkmcuxNmPSQYWs9dQpuIUSMME/edit?usp=sharing" },
            { title: "ខែមេសា", url: "https://docs.google.com/spreadsheets/d/1dYHkuS6NibG9IB4D858HGXECHA-grFNoZheo1qGrHVM/edit?usp=sharing" },
            { title: "ខែឧសភា", url: "https://docs.google.com/spreadsheets/d/1cfKqAxk_jilHluF4QmG7v-0Z46hh3U7m8xzqyglSoiQ/edit?usp=sharing" },
            { title: "ខែមិថុនា", url: "https://docs.google.com/spreadsheets/d/1DPQh4nAlJ18eXTidoDrSSPar19u85gEPgH8B2Yxmfb8/edit?usp=sharing" },
            { title: "ខែកក្កដា", url: "https://docs.google.com/spreadsheets/d/11X_hy2KHqqh4FwjlFYsOw-SUIGlgJPtcJghvTDKjCMA/edit?usp=sharing" },
            { title: "ខែសីហា", url: "https://docs.google.com/spreadsheets/d/1SozdJD9R8Yzy5eGhDx2LTeZ5QpYaWjl9NtZJJrCjU9A/edit?usp=sharing" }
        ],
         //CGC11
         "btn15": [
            { title: "Kahoot", url: "https://kahoot.it/" },
            { title: "Quizizz", url: "https://quizizz.com/join" }
        ],
        "btn16": [
            { title: "ប្រឡងប្រចាំខែកុម្ភៈ", url: "https://example.com/ict13-doc1.pdf" },
            { title: "ប្រឡងឆមាសទី១", url: "https://example.com/ict13-doc2.pdf" }
        ],
        "btn17": [
            { title: "ពិន្ទុប្រចាំខែវិច្ឆិកា", url: "https://docs.google.com/spreadsheets/d/1ZDVYf9fNiYrzy11kiE50ht_Rve16NkP3F72O4T3DTmY/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែធ្នូ", url: "https://docs.google.com/spreadsheets/d/1-eR_jNFDFzFdk7cS3-YXPsnppIMdSXGkGxTchI_k5Cs/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែមករា", url: "https://docs.google.com/spreadsheets/d/1ONqmnUqbkn1Lz4bbSJmx5AZkQy6ItksZgoS9pBYAcbc/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែកុម្ភៈ", url: "https://example.com/ict13-doc1.pdf" }
        ],
        "btn18": [
            { title: "មេរៀនទី១", url: "#" },
            { title: "មេរៀនទី២", url: "#" },
            { title: "មេរៀនទី៣", url: "#" },
            { title: "មេរៀនទី៤", url: "#" }
        ],
        "btn19": [
            { title: "មេរៀនទី៤ ការពន្យល់បកស្រាយ", url: "https://drive.google.com/file/d/1eMuM4OJwcyHbmcfdobETr07q99xhgzEQ/view?usp=sharing" },
            { title: "មេរៀនទី៥ ការរៀបចំធ្វើបទបង្ហាញ", url: "https://drive.google.com/file/d/1Z6kKc_mloQ6X3cP0iUbJLlLaqvwQZRX2/view?usp=sharing" },
            { title: "មេរៀនទី៦ ការធ្វើបទបង្ហាញទី១", url: "https://drive.google.com/file/d/1Ug8jpioNWfgZ7JV9dKDLGDN3FwZ6-hp4/view?usp=sharing" },
            { title: "មេរៀនទី៧ ការធ្វើបទបង្ហាញទី២", url: "https://drive.google.com/file/d/1wZXXbEosGSa9-nZ3VmEWS-oC9SqUHS_N/view?usp=sharing" },
            { title: "មេរៀនទី៨ ការធ្វើបទបង្ហាញទី៣", url: "https://drive.google.com/file/d/12B4Vl9nddAfJSKwwuSxP1-vB8s-M-qAl/view?usp=sharing" },
            { title: "មេរៀនទី៩ ការធ្វើបទបង្ហាញទី៤", url: "https://drive.google.com/file/d/1mbDK8X63MebWOreWTgZ1ig2SS6Bhvn6R/view?usp=sharing" },
            { title: "មេរៀនទី១០​ ការសង្ខេបខ្លឹមសារ", url: "https://drive.google.com/file/d/1UKY7_zUbxVNda5MuwrGNsCkaYHFaVwDZ/view?usp=sharing" },
            { title: "មេរៀនទី១១​ ការដោះស្រាយបញ្ហា", url: "https://drive.google.com/file/d/1bGrLSPBTqFrWwRfQtMtoGBllLJYyPVjb/view?usp=sharing" }
        ],
        "btn20": [
            { title: "ខែកុម្ភៈ", url: "https://docs.google.com/spreadsheets/d/1WePfFTCKawCHjBwiG72X7-d8vGM4ROXDpqUe-93c8us/edit?usp=sharing" },
            { title: "ខែមីនា", url: "https://docs.google.com/spreadsheets/d/1Az_l1513lOIXY1XlEy-hi9MjK4bjD3zS0C8ULVJcB4o/edit?usp=sharing" },
            { title: "ខែមេសា", url: "https://docs.google.com/spreadsheets/d/1JwGC8E10Sb08E8XE0R6o7kECVVuuNH0BdkMBTMza-7A/edit?usp=sharing" },
            { title: "ខែឧសភា", url: "https://docs.google.com/spreadsheets/d/1ulOTrkimrkKBjGE29PrZgToUn030idiRVSomT2xJcOM/edit?usp=sharing" },
            { title: "ខែមិថុនា", url: "https://docs.google.com/spreadsheets/d/1NjjfZFhHGl1YH7wuPizx3T-6TyoepuIb9beK6BYKhVk/edit?usp=sharing" },
            { title: "ខែកក្កដា", url: "https://docs.google.com/spreadsheets/d/1mdrtbAMHi--NoF2YeJE5fgNDN1jyT2RSF2uqtQZgU9g/edit?usp=sharing" },
            { title: "ខែសីហា", url: "https://docs.google.com/spreadsheets/d/1i8YWw9yWOc2EroNoVyTyWPDCtZWrU97ghQ0i6xAMtpI/edit?usp=sharing" }
        ],
        //hsbb
        "btn21": [
            { title: "ពិន្ទុប្រចាំខែវិច្ឆិកា", url: "https://docs.google.com/spreadsheets/d/1ZDVYf9fNiYrzy11kiE50ht_Rve16NkP3F72O4T3DTmY/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែធ្នូ", url: "https://docs.google.com/spreadsheets/d/1-eR_jNFDFzFdk7cS3-YXPsnppIMdSXGkGxTchI_k5Cs/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែមករា", url: "https://docs.google.com/spreadsheets/d/1RnGRGgkHNhPBEng1kL5MusTh9l897UTtC0OWqJVxrr0/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែកុម្ភៈ", url: "https://example.com/ict13-doc1.pdf" }
        ],
         "btn22": [
            { title: "Kahoot", url: "https://kahoot.it/" },
            { title: "Quizizz", url: "https://quizizz.com/join" }
        ],
        "btn23": [
            { title: "ប្រឡងប្រចាំខែកុម្ភៈ", url: "https://example.com/ict13-doc1.pdf" },
            { title: "ប្រឡងឆមាសទី១", url: "https://example.com/ict13-doc2.pdf" }
        ],
        "btn24": [
            { title: "ពិន្ទុប្រចាំខែវិច្ឆិកា", url: "https://docs.google.com/spreadsheets/d/1ZDVYf9fNiYrzy11kiE50ht_Rve16NkP3F72O4T3DTmY/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែធ្នូ", url: "https://docs.google.com/spreadsheets/d/1-eR_jNFDFzFdk7cS3-YXPsnppIMdSXGkGxTchI_k5Cs/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែមករា", url: "https://docs.google.com/spreadsheets/d/1RnGRGgkHNhPBEng1kL5MusTh9l897UTtC0OWqJVxrr0/edit?usp=sharing" },
            { title: "ពិន្ទុប្រចាំខែកុម្ភៈ", url: "https://example.com/ict13-doc1.pdf" }
        ],
        "btn25": [
            { title: "មេរៀនទី១", url: "#" },
            { title: "មេរៀនទី២", url: "#" },
            { title: "មេរៀនទី៣", url: "#" },
            { title: "មេរៀនទី៤", url: "#" }
        ],
        "btn26": [
            { title: "មេរៀនទី១", url: "#" },
            { title: "មេរៀនទី២", url: "#" },
            { title: "មេរៀនទី៣", url: "#" },
            { title: "មេរៀនទី៤", url: "#" }
        ]
};

// Titles for each button
const modalTitles = {
    //ict11
    "btn1": "លេងហ្គេមចុងម៉ោង",
    "btn2": "ប្រឡងICT11",
    "btn3": "ពិន្ទុប្រឡង",
    "btn4": "សន្លឹកកិច្ចការស្វ័យសិក្សា",
    "btn5": "Slideមេរៀនទ្រឹស្តី",
    "btn6": "Slideមេរៀនអនុវត្ត",
    "btn7": "អវត្តមានប្រចាំខែ",
    //ict12
    "btn8": "លេងហ្គេមចុងម៉ោង",
    "btn9": "ប្រឡងICT12",
    "btn10": "ពិន្ទុប្រឡង",
    "btn11": "សន្លឹកកិច្ចការស្វ័យសិក្សា",
    "btn12": "Slideមេរៀនទ្រឹស្តី",
    "btn13": "Slideមេរៀនអនុវត្ត",
    "btn14": "អវត្តមានប្រចាំខែ",
     //CGC11
     "btn15": "លេងហ្គេមចុងម៉ោង",
     "btn16": "ប្រឡងCGC11",
     "btn17": "ពិន្ទុប្រឡង",
     "btn18": "សន្លឹកកិច្ចការស្វ័យសិក្សា",
     "btn19": "Slideមេរៀនទ្រឹស្តី",
     "btn20": "អវត្តមានប្រចាំខែ",

       //hsbb
     "btn21": "វិធីសាស្រ្តបង្រៀន",
     "btn22": "កម្មវិធីសិក្សា",
     "btn23": "ស្តង់ដាទី២៖ការបង្រៀននិងរៀន",
     "btn24": "ប្រជុំក្រុមបច្ចេកទេស",
     "btn25": "បន្ទប់កុំព្យូទ័រ",
     "btn26": "អវត្តមានប្រចាំខែ"
    
};

// Get DOM elements
const sidebar = document.getElementById('sidebar');
const openmenu = document.getElementById('openmenu');
const buttonGroup = document.getElementById('buttonGroup');
const mainContent = document.getElementById('main-content');

// Sidebar Toggle Functions
function toggleMenu() {
    if (sidebar.style.left === '0px') {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    sidebar.style.left = '0';
    mainContent.style.marginLeft = '250px';
    openmenu.classList.add('open');
}

function closeMenu() {
    sidebar.style.left = '-250px';
    mainContent.style.marginLeft = '0';
    openmenu.classList.remove('open');
}

// Function to handle dynamic modal content
function showContent1(contentId) {
    const contentList = contentData[contentId];
    const modalBody = document.querySelector('.modal-body ul');
    const modalTitle = document.getElementById('myModalLabel');
    modalBody.innerHTML = '';

    modalTitle.textContent = modalTitles[contentId];

    contentList.forEach((content) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#" data-url="${content.url}" class="content-link">${content.title}</a>`;
        modalBody.appendChild(li);
    });

    // Add click event to load content into iframe
    document.querySelectorAll('.content-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const fileUrl = link.getAttribute('data-url');
            console.log("File URL clicked:", fileUrl);
            showContent(fileUrl);

            // Hide modal after click
            const modalElement = document.getElementById('myModal');
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();

            setActiveButton(document.getElementById(contentId));
            getLoggedInUser();
        });
    });
}

// Function to display content in the iframe
function showContent(file) {
    const iframe = document.getElementById('content-frame');
    if (!iframe) {
        console.error('Iframe element not found!');
        return;
    }
    hideAllButtons();
    iframe.src = file.includes('drive.google.com/file/d/') ?
        `https://drive.google.com/file/d/${file.match(/file\/d\/([a-zA-Z0-9_-]+)/)[1]}/preview` : file;

    console.log("Iframe src set to:", iframe.src);

    iframe.style.height = "100vh";
    iframe.style.display = "block";
}

// Function to hide all buttons
function hideAllButtons() {
    const buttons = buttonGroup.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.display = "none";  // Hide all buttons initially
    });
}

// Function to show buttons for ict11 (btn1 to btn5)
function showButton1to7() {
    const buttons = buttonGroup.querySelectorAll('button');
    buttons.forEach(button => {
        if (["btn1", "btn2", "btn3", "btn4", "btn5","btn6","btn7"].includes(button.id)) {
            button.style.display = "block";  // Show the button
        } else {
            button.style.display = "none";  // Hide other buttons
        }
    });
}

// Function to show buttons for ict12 (btn8 and btn14)
function showButton8and14() {
    const buttons = buttonGroup.querySelectorAll('button');
    buttons.forEach(button => {
        if (["btn8", "btn9","btn10","btn11","btn12","btn13","btn14"].includes(button.id)) {
            button.style.display = "block";  // Show the button
        } else {
            button.style.display = "none";  // Hide other buttons
        }
    });
}

// Function to show buttons for cgc11 (btn15 and btn20)
function showButton15and20() {
    const buttons = buttonGroup.querySelectorAll('button');
    buttons.forEach(button => {
        if (["btn15", "btn16","btn17","btn18","btn19","btn20"].includes(button.id)) {
            button.style.display = "block";  // Show the button
        } else {
            button.style.display = "none";  // Hide other buttons
        }
    });
}

// Function to show buttons for cgc11 (btn21 and btn27)
function showButton21and26() {
    const buttons = buttonGroup.querySelectorAll('button');
    buttons.forEach(button => {
        if (["btn21", "btn22","btn23","btn24","btn25","btn26"].includes(button.id)) {
            button.style.display = "block";  // Show the button
        } else {
            button.style.display = "none";  // Hide other buttons
        }
    });
}

// Function to handle buttons based on username
function handleButtons(username) {
    console.log("Handling buttons for user:", username);

    // Hide all buttons initially
    hideAllButtons();

    // Show buttons based on the username
    if (username === "ict12" || username === "ICT12"||username === " ict12"||username === " ICT12") {
        showButton8and14();
    } else if (username === "ict11" || username === "ICT11"||username === " ict11"||username === " ICT11") {
        showButton1to7();
    } else if (username === "cgc11" || username === "CGC11"||username === " cgc11"||username === " CGC11") {
         showButton15and20();
    } else if (username === "hsbb" || username === "HSBB"||username === " hsbb"||username === " HSBB") {
        showButton21and26();
   }

    // Add event listeners to visible buttons
    buttonGroup.querySelectorAll('button').forEach(button => {
        if (button.style.display === "block") {
            button.addEventListener('click', () => {
                console.log("Button clicked:", button.id);
                setActiveButton(button);
                showContent1(button.id);
            });
        }
    });
}

// Function to set the active class to the clicked button
function setActiveButton(clickedBtn) {
    const buttons = buttonGroup.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    clickedBtn.classList.add('active');
}

// Array of buttons with titles and their corresponding IDs
const buttons = [
    //ict11
    { id: "btn1", title: "លេខហ្កេមចុងម៉ោង" },
    { id: "btn2", title: "ប្រឡងICT11" },
    { id: "btn3", title: "ពិន្ទុICT11" },
    { id: "btn4", title: "សន្លឹកកិច្ចការស្វ័យសិក្សា" },
    { id: "btn5", title: "Slideមេរៀនទ្រឹស្តី" },
    { id: "btn6", title: "Slideមេរៀនអនុវត្ត" },
    { id: "btn7", title: "អវត្តមានប្រចាំខែ" },
    //ict12
    { id: "btn8", title: "លេខហ្កេមចុងម៉ោង" },
    { id: "btn9", title: "ប្រឡងICT12" },
    { id: "btn10", title: "ពិន្ទុICT12" },
    { id: "btn11", title: "សន្លឹកកិច្ចការស្វ័យសិក្សា" },
    { id: "btn12", title: "Slideមេរៀនទ្រឹស្តី" },
    { id: "btn13", title: "Slideមេរៀនអនុវត្ត" },
    { id: "btn14", title: "អវត្តមានប្រចាំខែ" },
    //cgc
    { id: "btn15", title: "លេខហ្កេមចុងម៉ោង" },
    { id: "btn16", title: "ប្រឡងCGC12" },
    { id: "btn17", title: "ពិន្ទុCGC12" },
    { id: "btn18", title: "សន្លឹកកិច្ចការស្វ័យសិក្សា" },
    { id: "btn19", title: "Slideមេរៀនទ្រឹស្តី" },
    { id: "btn20", title: "អវត្តមានប្រចាំខែ" },

     //hsbb
     { id: "btn21", title: "វិធីសាស្រ្តបង្រៀន" },
     { id: "btn22", title: "កម្មវិធីសិក្សា" },
     { id: "btn23", title: "ស្តង់ដាទី២៖ការបង្រៀននិងរៀន" },
     { id: "btn24", title: "ប្រជុំក្រុមបច្ចេកទេស" },
     { id: "btn25", title: "បន្ទប់កុំព្យូទ័រ" },
     { id: "btn26", title: "អវត្តមាន" }
];

// Function to dynamically generate buttons
function generateButtons() {
    buttonGroup.innerHTML = ''; // Clear any existing buttons

    // Loop through the array and create a button for each item
    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn custom-btn';
        btn.id = button.id;
        btn.setAttribute('data-bs-toggle', 'modal');
        btn.setAttribute('data-bs-target', '#myModal');
        btn.textContent = button.title;
        buttonGroup.appendChild(btn);
    });
}

// Call the function to generate buttons when the page loads
generateButtons();

// Fetch logged-in user's data
async function getLoggedInUser() {
    try {
        const response = await fetch('login.php');
        const userData = await response.json();
        console.log("Logged-in user:", userData);

        handleButtons(userData.username);  // Pass username to handle buttons
    } catch (error) {
        console.error("Error fetching logged-in user:", error);
    }
}

// Call the function to fetch the logged-in user
getLoggedInUser();
