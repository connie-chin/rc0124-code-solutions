setTimeout(() => {
  const $message = document.querySelector('.message');
  if (!$message) throw new Error('This $message query failed');
  $message.textContent = 'Hello There';
}, 2000);
