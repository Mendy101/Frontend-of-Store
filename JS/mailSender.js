
(function () {
  emailjs.init('BqR5Xa490S-GYGE6C');
})();


function generateItemsHtml(items) {
  return items
    .map(
      (item) => `
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #d0d0d0;">
                ${item.company} ${item.type}<br>
                <small style="color: #666;">Color: ${item.color}</small>
            </td>
            <td style="padding: 8px; border-bottom: 1px solid #d0d0d0;">
                ${item.details}
            </td>
            <td style="padding: 8px; border-bottom: 1px solid #d0d0d0;">
                ${item.amount}
            </td>
            <td style="padding: 8px; border-bottom: 1px solid #d0d0d0;">
                ${item.price}
            </td>
        </tr>
    `,
    )
    .join('');
}

// function getBase64Image(imagePath) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.crossOrigin = 'Anonymous'; // This may be necessary for some images
//     img.onload = function () {
//       const canvas = document.createElement('canvas');
//       canvas.width = this.width;
//       canvas.height = this.height;
//       const ctx = canvas.getContext('2d');
//       ctx.drawImage(this, 0, 0);
//       const dataURL = canvas.toDataURL('image/jpeg');
//       resolve(dataURL);
//     };
//     img.onerror = reject;
//     img.src = imagePath;
//   });
// }


function getBase64Image(imagePath) {
  const fullPath = path.join(__dirname, '..', 'images', imagePath);
  const image = fs.readFileSync(fullPath);
  return `data:image/jpeg;base64,${image.toString('base64')}`;
}

 function sendEmail(recipientEmail, recipientName, totalPriceMsg, items) {
  const templateParams = {
    to_email: recipientEmail,
    to_name: recipientName,
    totalPrice: `Your total price for this buy is: ${totalPriceMsg}`,
    items,
  };

  emailjs.send('service_dtew28l', 'template_aeftkqd', templateParams).then(
    function (response) {
      console.log('Email sent successfully!', response.status, response.text);
    },
    function (error) {
      console.log('Failed to send email.', error);
    },
  );
}