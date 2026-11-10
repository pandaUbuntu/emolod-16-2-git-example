const testButton = document.getElementById("test-button");
const testButtonBlock = document.getElementById("test-button-block");
const testButtonHidden = document.getElementById("test-button-hidden");
let count = 1;


testButtonHidden.onclick = () => {
    const header = document.querySelector('h1');

    if(header.style.display == 'block')
        header.style.display = 'none';
    else 
        header.style.display = 'block';
}

testButton.onclick = () => {
    const testDiv = document.getElementById("test-js");

    const text = document.createElement('p');
    text.textContent = "Будь-який текст! " + count;
    text.style.color = 'red';

    testDiv.append(text)
    count++;
}

/*

<div class="content-row">
        <div class="content-image">IMAGE 3</div>

        <div class="content-text">
          <h2>Third article</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
*/ 


testButtonBlock.onclick = () => {
    const container = document.createElement('div');
    container.classList.add('content-row');

    const contentImage = document.createElement('div');
    contentImage.classList.add('content-image');
    contentImage.textContent = "IMAGE 3"

    

    const contentText = document.createElement('div');
    contentText.classList.add('content-text');

    const header = document.createElement('h2');
    header.textContent = "Third article"

    const text1 = document.createElement('p');
    text1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." ;

    const text2 = document.createElement('p');
    text2.textContent = 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'

    contentText.append(header);
    contentText.append(text1);
    contentText.append(text2);

    container.append(contentImage);
    container.append(contentText);

    const testDiv = document.getElementById("test-js");

    testDiv.append(container)
}



