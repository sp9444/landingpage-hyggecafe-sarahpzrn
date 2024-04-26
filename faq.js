
const makeFaqContainerElement = () => {
    const faqContainerElem = document.createElement('div');

    faqContainerElem.classList.add('faq-container');

    return faqContainerElem;
};

const makeFaqItemElement = faqItem => {
    const { question, answer } =faqItem;
    const faqItemElem = document.createElement('div');
    const faqTitleElem = document.createElement('p');
    const faqContentElem = document.createElement('p');
    const faqToggleBtnElem = document.createElement('p');

    faqTitleElem.textContent = question;
    faqContentElem.innerHTML = answer;

    faqItemElem.classList.add('faq-item');
    faqTitleElem.classList.add('faq-item__title');
    faqContentElem.classList.add('faq-item__content');
    faqToggleBtnElem.classList.add('faq-item__toggle');

        faqToggleBtnElem.addEventListener('click', () => {
            faqItemElem.classList.toggle('open');
        })

    faqTitleElem.appendChild(faqToggleBtnElem);
    faqItemElem.appendChild(faqTitleElem);
    faqItemElem.appendChild(faqContentElem);
    return faqItemElem;
};

const makeFaq = (faqItems, parentElement) => {
    const container = makeFaqContainerElement();

    faqItems.forEach(item => {
        const faqItemElem = makeFaqItemElement(item);
        container.appendChild(faqItemElem)
    })
    parentElement.appendChild(container);
};

window.addEventListener('DOMContentLoaded', () => {
    const faqParentElement = document.getElementById('faq-section');
    fetch('faq.json')
        .then(response => response.json())
        .then(faqItems => {
            makeFaq(faqItems, faqParentElement);
            console.log(faqItems)
        });
});

