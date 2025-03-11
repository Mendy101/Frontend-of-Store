const branches = [
  {
    name: 'אילת צפון',
    address: 'הגל 2',
    hours: "א'-ה': 10:00-22:00, ו': 09:00-15:00",
  },
  {
    name: 'אילת מרכז התיירות',
    address: 'המעגל 4',
    hours: "א'-ה': 10:00-22:00, ו': 09:00-15:00",
  },
  {
    name: 'אילת לגונה',
    address: 'קניון 1',
    hours: "א'-ה': 10:00-22:00, ו': 09:00-15:00",
  },
  {
    name: 'אשדוד עד הלום',
    address: 'עד הלום',
    hours: "א'-ה': 10:00-19:00, ו': 09:30-14:00",
  },
  {
    name: 'אשקלון',
    address: 'אלי כהן 21',
    hours: "א'-ה': 10:00-19:00, ו': 09:30-14:00",
  },
  {
    name: 'תל אביב דיזנגוף',
    address: 'דיזנגוף 50',
    hours: "א'-ה': 10:00-20:00, ו': 09:00-14:00",
  },
  {
    name: 'חיפה קניון חיפה',
    address: 'קניון חיפה, דרך חיפה 44',
    hours: "א'-ה': 10:00-22:00, ו': 09:00-14:00",
  },
  {
    name: 'נתניה עיר ימים',
    address: 'עיר ימים 17',
    hours: "א'-ה': 10:00-21:00, ו': 09:00-14:00",
  },
  {
    name: 'הרצליה פיתוח',
    address: 'מדינת היהודים 85',
    hours: "א'-ה': 10:00-22:00, ו': 09:00-14:00",
  },
  {
    name: 'ירושלים קניון מלחה',
    address: 'קניון מלחה',
    hours: "א'-ה': 10:00-22:00, ו': 09:00-14:00",
  },
  {
    name: 'פתח תקווה',
    address: 'היצירה 1',
    hours: "א'-ה': 10:00-20:00, ו': 09:00-14:00",
  },
  {
    name: 'ראשון לציון',
    address: 'חיים צדוק 12',
    hours: "א'-ה': 10:00-20:00, ו': 09:00-14:00",
  },
  {
    name: 'כפר סבא',
    address: 'היוצרים 15',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'רמת גן',
    address: 'ביאליק 5',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'באר שבע',
    address: 'הנשיא 6',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'הרצליה',
    address: 'הארבעה 22',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'קריית ביאליק',
    address: 'האלונים 4',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'אשדוד',
    address: 'שדרות בני ברית',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'חולון',
    address: 'שדרות דב הוז 15',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'חדרה',
    address: 'הרברט סמואל 10',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'נהריה',
    address: "ז'בוטינסקי 3",
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'עכו',
    address: 'ביאליק 7',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'טבריה',
    address: 'הנשיאים 20',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'נתיבות',
    address: 'רבי עקיבא 15',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'ערד',
    address: 'בן גוריון 8',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'כרמיאל',
    address: 'חולית 5',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'צפת',
    address: 'הראשונים 2',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'ראש פינה',
    address: 'הגדוד העברי 4',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'רעננה',
    address: 'אחוזה 27',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
  {
    name: 'שדרות',
    address: 'השלום 17',
    hours: "א'-ה': 10:00-19:00, ו': 09:00-14:00",
  },
];

function createBranchCard(branch) {
  const card = document.createElement('div');
  card.className = 'branch-card';

  card.innerHTML = `
        <h2>${branch.name}</h2>
        <p class="icon-text"><i class="fas fa-map-marker-alt location-icon"></i>${branch.address}</p>
        <p class="icon-text"><i class="fas fa-clock hours-icon"></i><span class="hours">${branch.hours}</span></p>
    `;

  return card;
}

function displayBranches(branchList) {
  const container = document.getElementById('branches-container');
  container.innerHTML = '';
  branchList.forEach((branch) => {
    const card = createBranchCard(branch);
    container.appendChild(card);
  });
}

function filterBranches() {
  const searchValue = document
    .getElementById('branch-search')
    .value.toLowerCase();
  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchValue) ||
      branch.address.toLowerCase().includes(searchValue),
  );
  displayBranches(filteredBranches);
}

// הצגת כל הסניפים בהתחלה
displayBranches(branches);
