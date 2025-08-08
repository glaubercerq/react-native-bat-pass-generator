export default function generatePass(): string {
  let password: string = '';
  
  // Caracteres organizados por categoria para garantir senha forte
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  const allCharacters = uppercase + lowercase + numbers + symbols;
  const passwordLength = 12; // Aumentando para maior segurança
  
  // Garantir pelo menos um caractere de cada tipo
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  
  // Preencher o restante da senha
  for (let index = 4; index < passwordLength; index++) {
    password += allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }
  
  // Embaralhar a senha para randomizar a posição dos caracteres garantidos
  return password.split('').sort(() => Math.random() - 0.5).join('');
}