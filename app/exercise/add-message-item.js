import createMessage from './create-message-item';

export default function addMessage(list, message) {
  const li = createMessage(message);

  list.appendChild(li);
}
