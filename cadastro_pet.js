const breeds = {
  cachorro: [
    "Pug", "Shih Tzu", "Chihuahua", "Pequinês", "Bichon Frisé", "Maltês", "Lhasa Apso", 
    "Poodle Toy", "Cavalier King Charles Spaniel", "Yorkshire Terrier", "Papillon", 
    "Griffon de Bruxelas", "Rottweiler", "Doberman", "Pastor Alemão", "Boxer", "Akita Inu", 
    "Mastim Napolitano", "Dogue Alemão", "Cane Corso", "Fila Brasileiro", "São Bernardo", 
    "Schnauzer Gigante", "Bullmastiff", "Border Collie", "Pastor Australiano", "Corgi Pembroke", 
    "Corgi Cardigan", "Pastor Belga Malinois", "Pastor Belga Tervuren", "Pastor Belga Groenendael", 
    "Pastor de Shetland", "Boiadeiro de Berna", "Komondor", "Kuvasz", "Collie", "Beagle", 
    "Basset Hound", "Bloodhound", "Cocker Spaniel", "Springer Spaniel", "Labrador Retriever", 
    "Golden Retriever", "Pointer Inglês", "Setter Irlandês", "Weimaraner", "Braco Alemão", 
    "Vizsla", "Husky Siberiano", "Malamute do Alasca", "Spitz Alemão", "Lulu da Pomerânia", 
    "Shiba Inu", "Basenji", "Samoieda", "Chow Chow", "Esquimó Americano", "Jack Russell Terrier", 
    "Bull Terrier", "Staffordshire Bull Terrier", "American Staffordshire Terrier", "Fox Terrier", 
    "West Highland White Terrier", "Scottish Terrier", "Cairn Terrier", "Airedale Terrier", 
    "Poodle Miniatura", "Poodle Standard", "Dálmata", "Shar Pei", "Afghan Hound", "Greyhound", 
    "Whippet", "Borzoi", "Xoloitzcuintli", "Saluki"
  ],
  gato: [
    "Persa", "Siamês", "Maine Coon", "Bengal", "Sphynx", "Ragdoll", "Birmanês", 
    "Abissínio", "Chartreux", "Savannah", "Scottish Fold", "Himalaio", "Angorá Turco", 
    "Bombay", "Cornish Rex", "Devon Rex", "Manx", "Norueguês da Floresta", "Siberiano", 
    "Somali", "Tonquinês", "Van Turco", "Exótico de Pelo Curto", "American Shorthair", 
    "British Shorthair", "Oriental", "Balinês", "Javanês", "Singapura", "Selkirk Rex", 
    "LaPerm", "Munchkin", "Burmilla", "Korat", "Ocicat", "Peterbald", "Toyger"
  ]
};

const breedInput = document.getElementById('breed-input');
const breedSuggestions = document.getElementById('breed-suggestions');
let currentAnimal = 'cachorro'; // Define o animal padrão como cachorro

// Atualiza o animal atual ao alternar as abas
const tabs = document.querySelectorAll('.tabs button');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    currentAnimal = tab.textContent.includes('🐶') ? 'cachorro' : 'gato';
    breedInput.value = ''; // Limpa o campo de entrada ao trocar de aba
    breedSuggestions.innerHTML = ''; // Limpa as sugestões
  });
});

// Mostra as sugestões enquanto o usuário digita
breedInput.addEventListener('input', () => {
  const query = breedInput.value.toLowerCase();
  breedSuggestions.innerHTML = ''; // Limpa as sugestões anteriores

  if (query) {
    const filteredBreeds = breeds[currentAnimal].filter(breed =>
      breed.toLowerCase().includes(query)
    );

    filteredBreeds.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      li.addEventListener('click', () => {
        breedInput.value = breed; // Preenche o campo com a raça selecionada
        breedSuggestions.innerHTML = ''; // Limpa as sugestões
      });
      breedSuggestions.appendChild(li);
    });
  }
});

// Esconde as sugestões ao clicar fora
document.addEventListener('click', (e) => {
  if (!breedInput.contains(e.target) && !breedSuggestions.contains(e.target)) {
    breedSuggestions.innerHTML = '';
  }
});

// Torna os botões de vacinas sempre ativos ao clicar
const vaccineButtons = document.querySelectorAll('.vaccines button');
vaccineButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('active'); // Adiciona a classe 'active'
  });
});