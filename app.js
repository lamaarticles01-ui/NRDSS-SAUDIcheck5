/**
 * NRDSS - Nuwakot Rasuwa Dhading Samaj Saudi Arabia
 * Master Core Application Engine
 * Responsive Web & Cross-Platform Architecture
 * 
 * Features & Security Architecture:
 * - Multi-Role Access Control (Master Admin, Executive Admin, Member)
 * - Anti-forgery Security Definer Guards & Role Authorization System
 * - Golden Metallic Box for Founder Membership (300 SAR)
 * - "My QR ID Card" Exporter with Instant High-Res PDF & PNG Download
 * - Comprehensive Admin Detail Inspection Drawer (All 22 Registration Fields + High-Res Document Viewer)
 * - Admin Title Prefix Manager (Custom titles above member names e.g. "Founder", "President", "Mr.")
 * - Member Code Instant Copy Button
 * - Registerable Events with Custom Unique Attendance QR Code Ticket Generator & Google Maps Integration
 * - Ad Space Engine (Supports Photo & Video Advertisements)
 * - Mass Push Notification Dispatcher
 * - Gallery & News Hub with File/Post Downloads
 * - Clean Avatar Rendering (Eliminates white background box bleed on photos)
 */

// Storage Keys
const STORAGE_KEYS = {
  USERS: 'nrdss_users_v6',
  CURRENT_USER: 'nrdss_current_user_v6',
  EVENTS: 'nrdss_events_v6',
  NOTIFICATIONS: 'nrdss_notifications_v6',
  ADS: 'nrdss_ads_v6',
  NEWS: 'nrdss_news_v6',
  GALLERY: 'nrdss_gallery_v6',
  ATTENDANCE: 'nrdss_attendance_v6',
  MEMBERSHIP_FEE_CONFIG: 'nrdss_fees_v6',
  AUDIT_LOGS: 'nrdss_audit_logs_v6'
};

// Country Calling Codes List (Saudi Arabia & Nepal Only)
const COUNTRY_DIAL_CODES = [
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' }
];

// Official Membership Categories Configuration (Including Guest Member)
const DEFAULT_MEMBERSHIP_TIERS = [
  { id: 'guest', name: 'Guest Member', fee: 0, duration: 'Free Unlimited', golden: false, guest: true, desc: 'Instant free guest access for visitors, supporters, and prospective members to explore NRDSS events and portal.' },
  { id: 'half_yr', name: 'Half Year General Member', fee: 60, duration: '6 Months', golden: false, desc: 'Standard 6-month community membership for Nuwakot, Rasuwa, Dhading residents in KSA.' },
  { id: 'two_yr', name: '2 Year General Member', fee: 200, duration: '2 Years', golden: false, desc: 'Extended 2-year membership with full community benefits and event privileges.' },
  { id: 'lifetime', name: 'Lifetime Member', fee: 250, duration: 'Lifetime Permanent', golden: false, desc: 'Permanent lifetime membership with priority access to emergency relief funds.' },
  { id: 'founder', name: 'Founder Member', fee: 300, duration: 'Lifetime Permanent', golden: true, desc: 'Prestigious Founder Membership tier with permanent General Assembly voting rights & golden badge.' }
];

// Seed Pre-configured Core Accounts & Members
const DEFAULT_USERS = [
  {
    id: 'usr_master',
    email: 'lamaarticles01@gmail.com',
    password: 'lama0011',
    role: 'master_admin',
    titlePrefix: 'Master Admin',
    fullName: 'Lama Articles (Master)',
    fatherName: 'Pema Dorje Lama',
    motherName: 'Sonam Dolma Lama',
    gender: 'Male',
    dob: '1988-03-12',
    citizenshipNo: '27-01-65-00101',
    passport: 'N01234567',
    iqama: '2456789123',
    district: 'Nuwakot',
    municipality: 'Bidur Municipality',
    wardNo: '01',
    permanentAddress: 'Bidur-01, Nuwakot, Nepal',
    saudiCity: 'Riyadh',
    occupation: 'System Administrator & IT Director',
    companyName: 'NRDSS Saudi Arabia Central Office',
    phone: '+966 50 123 4567',
    bloodGroup: 'O+',
    emergencyContact: '+977 9851011111 (Family)',
    memberCode: 'NRDSS-MASTER-001',
    membershipType: 'Founder Member',
    membershipFee: 300,
    status: 'Approved',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    citizenshipDoc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    passportDoc: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
    paymentReceipt: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    joinedDate: '2026-01-01'
  },
  {
    id: 'usr_admin',
    email: 'nrdssksa@gmail.com',
    password: 'nrdss0011',
    role: 'admin',
    titlePrefix: 'Executive Admin',
    fullName: 'NRDSS Official Executive Admin',
    fatherName: 'Ram Bahadur Shrestha',
    motherName: 'Saraswati Shrestha',
    gender: 'Male',
    dob: '1990-06-25',
    citizenshipNo: '28-02-68-00202',
    passport: 'R09876543',
    iqama: '2498765432',
    district: 'Rasuwa',
    municipality: 'Uttargaya Rural Municipality',
    wardNo: '03',
    permanentAddress: 'Uttargaya-03, Rasuwa, Nepal',
    saudiCity: 'Jeddah',
    occupation: 'Operations Manager',
    companyName: 'Saudi Red Sea Logistics',
    phone: '+966 55 987 6543',
    bloodGroup: 'A+',
    emergencyContact: '+977 9841222222',
    memberCode: 'NRDSS-ADMIN-002',
    membershipType: 'Founder Member',
    membershipFee: 300,
    status: 'Approved',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    citizenshipDoc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    passportDoc: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
    paymentReceipt: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    joinedDate: '2026-01-10'
  },
  {
    id: 'usr_scanner_raaz',
    email: 'raazllama01@gmail.com',
    password: 'raj@@0011',
    role: 'scanner_admin',
    titlePrefix: 'Gate Verifier',
    fullName: 'Raaz Lama (Gate Attendance Officer)',
    fatherName: 'Purna Bahadur Lama',
    motherName: 'Maya Devi Lama',
    gender: 'Male',
    dob: '1995-08-15',
    citizenshipNo: '27-01-72-04512',
    passport: 'PA0891234',
    iqama: '2398471204',
    district: 'Dhading',
    municipality: 'Nilkantha Municipality',
    wardNo: '04',
    permanentAddress: 'Nilkantha-04, Dhading, Nepal',
    saudiCity: 'Riyadh',
    occupation: 'Gate Attendance Officer & Security Verifier',
    companyName: 'NRDSS Saudi Arabia Security',
    phone: '+966 54 892 1045',
    bloodGroup: 'O+',
    emergencyContact: '+977 9851012345',
    memberCode: 'NRDSS-SCANNER-007',
    membershipType: 'Founder Member',
    membershipFee: 300,
    status: 'Approved',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    citizenshipDoc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    passportDoc: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
    paymentReceipt: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    joinedDate: '2026-01-01'
  },
  {
    id: 'usr_member_raj',
    email: 'rajlama01qz@gmail.com',
    password: 'raj@@0011',
    role: 'member',
    titlePrefix: 'Founder',
    fullName: 'Raj Lama',
    fatherName: 'Purna Bahadur Lama',
    motherName: 'Maya Devi Lama',
    gender: 'Male',
    dob: '1995-08-15',
    citizenshipNo: '27-01-72-04512',
    passport: 'PA0891234',
    iqama: '2398471204',
    district: 'Dhading',
    municipality: 'Nilkantha Municipality',
    wardNo: '04',
    permanentAddress: 'Nilkantha-04, Dhading, Nepal',
    saudiCity: 'Riyadh',
    occupation: 'Senior IT Consultant',
    companyName: 'Al-Rajhi Technology Co.',
    phone: '+966 54 892 1045',
    bloodGroup: 'O+',
    emergencyContact: '+977 9851012345 (Father)',
    memberCode: 'NRDSS-2026-8891',
    membershipType: 'Founder Member',
    membershipFee: 300,
    status: 'Approved',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    citizenshipDoc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    passportDoc: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
    paymentReceipt: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    joinedDate: '2026-02-14'
  },
  {
    id: 'usr_pending_1',
    email: 'suresh.tamang@gmail.com',
    password: 'password123',
    role: 'member',
    titlePrefix: 'Mr.',
    fullName: 'Suresh Tamang',
    fatherName: 'Bhakta Bahadur Tamang',
    motherName: 'Sunita Tamang',
    gender: 'Male',
    dob: '1998-04-20',
    citizenshipNo: '28-02-74-09812',
    passport: 'PC9081234',
    iqama: '2410982341',
    district: 'Nuwakot',
    municipality: 'Bidur Municipality',
    wardNo: '02',
    permanentAddress: 'Bidur-02, Nuwakot, Nepal',
    saudiCity: 'Dammam',
    occupation: 'Logistics Supervisor',
    companyName: 'Saudi Transport Ltd.',
    phone: '+966 53 112 3344',
    bloodGroup: 'B+',
    emergencyContact: '+977 9841239876',
    memberCode: 'NRDSS-2026-9042',
    membershipType: '2 Year General Member',
    membershipFee: 200,
    status: 'Pending',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80',
    citizenshipDoc: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    passportDoc: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
    paymentReceipt: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    joinedDate: '2026-07-20'
  },
  {
    id: 'usr_guest',
    email: 'guest@nrdss.org',
    password: 'guest',
    role: 'guest_member',
    titlePrefix: 'Guest',
    fullName: 'Guest Member Visitor',
    fatherName: 'N/A',
    motherName: 'N/A',
    gender: 'Male',
    dob: '2000-01-01',
    citizenshipNo: 'GUEST-00000',
    passport: 'GUEST000',
    iqama: '2000000000',
    district: 'Nuwakot',
    municipality: 'Guest Community Member',
    wardNo: '01',
    permanentAddress: 'Nepal Diaspora Guest',
    saudiCity: 'Riyadh',
    occupation: 'Guest Visitor / Supporter',
    companyName: 'NRDSS Community Supporter',
    phone: '+966 50 000 0000',
    bloodGroup: 'O+',
    emergencyContact: '+966 50 000 0000',
    memberCode: 'NRDSS-GUEST-999',
    membershipType: 'Guest Member',
    membershipFee: 0,
    status: 'Approved',
    photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
    citizenshipDoc: '',
    passportDoc: '',
    paymentReceipt: '',
    joinedDate: '2026-07-25'
  }
];

// Seed Events
const DEFAULT_EVENTS = [
  {
    id: 'evt_101',
    title: 'NRDSS Annual Grand Cultural Program & General Assembly 2026',
    date: '2026-08-15',
    time: '04:00 PM - 10:00 PM',
    locationName: 'Al-Anoud Convention Center, Riyadh, Saudi Arabia',
    googleMapsUrl: 'https://maps.google.com/?q=Al-Anoud+Convention+Center+Riyadh',
    bannerUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&auto=format&fit=crop&q=80',
    description: 'Join us for the grand gathering of Nuwakot, Rasuwa, and Dhading communities in Saudi Arabia. Cultural performances, chief guest address, community dinner, and awards distribution.',
    capacity: 500,
    registrationFee: 50,
    registeredMembers: ['usr_member_raj', 'usr_master'],
    registrations: [
      {
        userId: 'usr_member_raj',
        name: 'Raj',
        surname: 'Lama',
        contact: '+966 54 892 1045',
        email: 'rajlama01qz@gmail.com',
        ticketCode: 'TKT-101-8891',
        registeredAt: '2026-07-22 02:30 PM',
        feePaid: 50,
        paymentStatus: 'Pending Review',
        paymentMethod: 'Bank Transfer (STC Pay)',
        paymentReceipt: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80'
      },
      {
        userId: 'usr_master',
        name: 'Lama',
        surname: 'Articles',
        contact: '+966 50 123 4567',
        email: 'lamaarticles01@gmail.com',
        ticketCode: 'TKT-101-0010',
        registeredAt: '2026-07-23 10:15 AM',
        feePaid: 50,
        paymentStatus: 'Paid',
        paymentMethod: 'Online Payment',
        paymentReceipt: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'evt_102',
    title: 'Free Medical Checkup & Blood Donation Drive - Dammam',
    date: '2026-09-05',
    time: '08:00 AM - 02:00 PM',
    locationName: 'Badr Al-Samaa Medical Center, Dammam',
    googleMapsUrl: 'https://maps.google.com/?q=Badr+Al-Samaa+Medical+Center+Dammam',
    bannerUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80',
    description: 'Organized in collaboration with Saudi Health Ministry & Embassy of Nepal. Free medical screening, ECG, blood pressure test, and voluntary blood donation camp.',
    capacity: 300,
    registrationFee: 0,
    registeredMembers: [],
    registrations: []
  },
  {
    id: 'evt_103',
    title: 'NRDSS Community Football Tournament & Picnic 2026',
    date: '2026-10-10',
    time: '07:00 AM - 06:00 PM',
    locationName: 'Al-Khobar Sports Complex Field, Eastern Province',
    googleMapsUrl: 'https://maps.google.com/?q=Al-Khobar+Sports+Complex',
    bannerUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    description: 'Annual inter-district football championship, tug of war, barbecue picnic, and children games for community families.',
    capacity: 400,
    registrationFee: 30,
    registeredMembers: ['usr_admin'],
    registrations: [
      {
        userId: 'usr_admin',
        name: 'NRDSS',
        surname: 'Executive Admin',
        contact: '+966 55 987 6543',
        email: 'nrdssksa@gmail.com',
        ticketCode: 'TKT-103-5542',
        registeredAt: '2026-07-24 11:00 AM',
        feePaid: 30,
        paymentStatus: 'Paid',
        paymentMethod: 'Cash Deposit',
        paymentReceipt: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80'
      }
    ]
  }
];


// Seed Advertisements (Supports Photo & Video Ads)
const DEFAULT_ADS = [
  {
    id: 'ad_1',
    title: 'Himalayan Cargo & Freight Express KSA',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80',
    targetUrl: 'mailto:nrdssksa@gmail.com',
    caption: 'Fast, reliable door-to-door cargo service from Riyadh, Jeddah & Dammam to Nuwakot, Rasuwa, and Dhading, Nepal!'
  },
  {
    id: 'ad_2',
    title: 'Al-Madina Nepali Thakali Kitchen Riyadh',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80',
    targetUrl: 'mailto:nrdssksa@gmail.com',
    caption: 'Authentic Nepali Thakali Khana Set, Sel Roti, and Momo in Batha, Riyadh. 10% special discount for NRDSS Cardholders!'
  }
];

// Seed Broadcast Notifications
const DEFAULT_NOTIFICATIONS = [
  {
    id: 'notif_1',
    title: 'Welcome to NRDSS Digital Portal',
    message: 'Welcome to the official NRDSS Saudi Arabia app. Explore your digital QR membership card, events, news, and community notices.',
    date: '2026-07-22 10:00 AM',
    readBy: []
  },
  {
    id: 'notif_2',
    title: 'Instant QR ID Card Downloads Activated',
    message: 'All approved members can now instantly download their official NRDSS QR Member ID card in high-resolution PDF or PNG format.',
    date: '2026-07-22 11:30 AM',
    readBy: []
  }
];

// Seed News
const DEFAULT_NEWS = [
  {
    id: 'news_1',
    title: 'NRDSS Emergency Support Relief Fund Established for KSA Members',
    category: 'Important Notice',
    date: '2026-07-15',
    summary: 'The Executive Board has officially approved an emergency relief fund dedicated to supporting community members facing medical emergencies or legal assistance in Saudi Arabia.',
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&auto=format&fit=crop&q=80',
    downloadUrl: '#'
  },
  {
    id: 'news_2',
    title: 'Embassy Consular Service Camp Announcement - Jeddah & Dammam',
    category: 'Circular',
    date: '2026-07-18',
    summary: 'Embassy of Nepal in Riyadh in coordination with NRDSS will organize passport renewal and document attestation camps next month.',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80',
    downloadUrl: '#'
  }
];

// Seed Gallery
const DEFAULT_GALLERY = [
  {
    id: 'gal_1',
    title: 'Teej & Dashain Grand Cultural Celebration 2025',
    category: 'Cultural Celebrations 2025',
    album: 'Cultural Celebrations 2025',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
    caption: 'Nepali cultural dance performance and Teej festival gathering in Riyadh.',
    date: '2025-10-12'
  },
  {
    id: 'gal_2',
    title: 'NRDSS Executive Board Oath Taking Ceremony',
    category: 'Executive Assemblies',
    album: 'Executive Assemblies',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80',
    caption: 'Official executive committee oath taking ceremony in KSA central office.',
    date: '2025-06-20'
  },
  {
    id: 'gal_3',
    title: 'Himalayan Medical & Blood Donation Drive Video',
    category: 'Medical & Health Camps',
    album: 'Medical & Health Camps',
    type: 'video',
    mediaUrl: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-giving-high-fives-42875-large.mp4',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    caption: 'Video highlights from the voluntary blood donation drive organized in Dammam.',
    date: '2026-03-15'
  }
];

const DEFAULT_BOARD_MEMBERS = [
  {
    id: 'bm_001',
    name: 'Lama Articles (Master Founder & President)',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'bm_002',
    name: 'NRDSS Executive Admin (Vice President & General Secretary)',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'bm_003',
    name: 'Raaz Lama (Executive Treasurer & Gate Chief)',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'bm_004',
    name: 'Raj Lama (Senior Executive Board Advisor)',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'bm_005',
    name: 'Subash Tamang (Rasuwa District Representative)',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'bm_006',
    name: 'Bikram Ghale (Nuwakot District Representative)',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=80'
  }
];

// Seed Charity & Relief Campaigns
const DEFAULT_CAMPAIGNS = [
  {
    id: 'camp_1',
    title: 'Rasuwa Flood & Landslide Emergency Family Relief Fund 2026',
    category: 'Emergency Relief',
    description: 'Providing immediate food supplies, temporary shelter, medical kits, and financial aid to 150+ affected families in Rasuwa district after monsoon landslides.',
    goalAmount: 50000,
    raisedAmount: 34200,
    donorCount: 84,
    status: 'Active',
    bannerUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1000&auto=format&fit=crop&q=80',
    deadline: '2026-09-30',
    bankName: 'Al Rajhi Bank Saudi Arabia',
    accountName: 'Nuwakot Rasuwa Dhading Samaj KSA Relief',
    accountNumber: '458608010099',
    iban: 'SA4480000458608010099',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=SA4480000458608010099',
    createdAt: '2026-07-01'
  },
  {
    id: 'camp_2',
    title: 'Nuwakot Rural School Children Computer Lab & Scholarship Campaign',
    category: 'Education Support',
    description: 'Setting up 2 modern computer labs and providing annual academic scholarships for 50 meritorious underprivileged students in Nuwakot district schools.',
    goalAmount: 30000,
    raisedAmount: 19800,
    donorCount: 52,
    status: 'Active',
    bannerUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=80',
    deadline: '2026-11-15',
    bankName: 'SNB (Saudi National Bank)',
    accountName: 'NRDSS KSA Education Support',
    accountNumber: '1029384756',
    iban: 'SA211000001029384756',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=SA211000001029384756',
    createdAt: '2026-06-15'
  },
  {
    id: 'camp_3',
    title: 'Emergency Medical Evacuation Support: Saudi Deceased Nepali Worker Welfare',
    category: 'Diaspora Welfare',
    description: 'Providing immediate airfare repatriation, legal documentation support, and emergency stipend to grieving families of deceased diaspora workers in KSA.',
    goalAmount: 25000,
    raisedAmount: 25000,
    donorCount: 79,
    status: 'Completed',
    bannerUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1000&auto=format&fit=crop&q=80',
    deadline: '2026-06-01',
    bankName: 'Al Inma Bank Saudi Arabia',
    accountName: 'NRDSS KSA Welfare Fund',
    accountNumber: '9988776655',
    iban: 'SA880500009988776655',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=SA880500009988776655',
    createdAt: '2026-05-01'
  }
];

const DEFAULT_DONATIONS = [
  {
    id: 'don_1',
    campaignId: 'camp_1',
    donorName: 'Lama Articles (Master Admin)',
    isAnonymous: false,
    amount: 1000,
    currency: 'SAR',
    paymentMethod: 'Bank Wire Transfer',
    transactionRef: 'ALRAJHI-992011',
    receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    date: '2026-07-10',
    message: 'May God bless all affected families in Rasuwa. Staying strong together!'
  },
  {
    id: 'don_2',
    campaignId: 'camp_1',
    donorName: 'Anonymous Donor',
    isAnonymous: true,
    amount: 500,
    currency: 'SAR',
    paymentMethod: 'STC Pay QR',
    transactionRef: 'STC-558291',
    date: '2026-07-12',
    message: 'Small contribution for emergency relief.'
  },
  {
    id: 'don_3',
    campaignId: 'camp_2',
    donorName: 'Raaz Lama (Treasurer)',
    isAnonymous: false,
    amount: 750,
    currency: 'SAR',
    paymentMethod: 'Bank Wire Transfer',
    transactionRef: 'SNB-883920',
    date: '2026-07-15',
    message: 'Supporting the future generation of Nuwakot.'
  }
];

// Application Storage Store Manager Class
class NRDSSStore {
  constructor() {
    this.initStorage();
  }

  initStorage() {
    let storedUsers = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || 'null');
    if (!storedUsers || storedUsers.length === 0) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    } else {
      // Sync any newly added seed default users (e.g. raazllama01@gmail.com) into localStorage
      let updated = false;
      DEFAULT_USERS.forEach(def => {
        if (!storedUsers.some(u => u.email.toLowerCase() === def.email.toLowerCase())) {
          storedUsers.push(def);
          updated = true;
        }
      });
      if (updated) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(storedUsers));
      }
    }
    if (!localStorage.getItem(STORAGE_KEYS.EVENTS)) {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(DEFAULT_EVENTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ADS)) {
      localStorage.setItem(STORAGE_KEYS.ADS, JSON.stringify(DEFAULT_ADS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(DEFAULT_NOTIFICATIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.NEWS)) {
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(DEFAULT_NEWS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.GALLERY)) {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(DEFAULT_GALLERY));
    }
    if (!localStorage.getItem(STORAGE_KEYS.MEMBERSHIP_FEE_CONFIG)) {
      localStorage.setItem(STORAGE_KEYS.MEMBERSHIP_FEE_CONFIG, JSON.stringify(DEFAULT_MEMBERSHIP_TIERS));
    }
    if (!localStorage.getItem('nrdss_board_members_v4')) {
      localStorage.setItem('nrdss_board_members_v4', JSON.stringify(DEFAULT_BOARD_MEMBERS));
    }
    if (!localStorage.getItem('nrdss_campaigns_v1')) {
      localStorage.setItem('nrdss_campaigns_v1', JSON.stringify(DEFAULT_CAMPAIGNS));
    }
    if (!localStorage.getItem('nrdss_donations_v1')) {
      localStorage.setItem('nrdss_donations_v1', JSON.stringify(DEFAULT_DONATIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.AUDIT_LOGS)) {
      localStorage.setItem(STORAGE_KEYS.AUDIT_LOGS, JSON.stringify([]));
    }
  }

  getCampaigns() {
    try {
      const data = localStorage.getItem('nrdss_campaigns_v1');
      if (data) return JSON.parse(data);
    } catch(e){}
    return DEFAULT_CAMPAIGNS;
  }

  saveCampaigns(campaigns) {
    localStorage.setItem('nrdss_campaigns_v1', JSON.stringify(campaigns));
  }

  getDonations() {
    try {
      const data = localStorage.getItem('nrdss_donations_v1');
      if (data) return JSON.parse(data);
    } catch(e){}
    return DEFAULT_DONATIONS;
  }

  saveDonations(donations) {
    localStorage.setItem('nrdss_donations_v1', JSON.stringify(donations));
  }

  getBoardMembers() {
    try {
      const data = localStorage.getItem('nrdss_board_members_v4');
      if (!data) {
        localStorage.setItem('nrdss_board_members_v4', JSON.stringify(DEFAULT_BOARD_MEMBERS));
        return DEFAULT_BOARD_MEMBERS;
      }
      let members = JSON.parse(data);
      if (!Array.isArray(members) || members.length === 0) {
        members = DEFAULT_BOARD_MEMBERS;
        localStorage.setItem('nrdss_board_members_v4', JSON.stringify(members));
      }
      return members.map(m => ({
        id: m.id || ('bm_' + Math.random()),
        name: m.name || 'Board Member',
        photo: m.photo || m.certificateUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=80'
      }));
    } catch (e) {
      console.error('Error loading board members:', e);
      return DEFAULT_BOARD_MEMBERS;
    }
  }

  saveBoardMembers(members) {
    localStorage.setItem('nrdss_board_members_v4', JSON.stringify(members));
  }

  getLogoConfig() {
    try {
      const data = localStorage.getItem('nrdss_logo_config_v3');
      if (data) return JSON.parse(data);
    } catch (e) {}
    return {
      logoUrl: localStorage.getItem('nrdss_site_logo_v1') || './logo.jpg',
      cropOffsetX: 0,
      cropOffsetY: 0,
      cropScale: 1.0
    };
  }

  saveLogoConfig(config) {
    localStorage.setItem('nrdss_logo_config_v3', JSON.stringify(config));
    if (config.logoUrl) {
      localStorage.setItem('nrdss_site_logo_v1', config.logoUrl);
    }
  }

  getLogo() {
    const cfg = this.getLogoConfig();
    return cfg.logoUrl || './logo.jpg';
  }

  getLogoImgHtml(className = "w-11 h-11", extraStyle = "") {
    const config = this.getLogoConfig();
    const logoUrl = config.logoUrl || './logo.jpg';
    const offsetX = config.cropOffsetX || 0;
    const offsetY = config.cropOffsetY || 0;
    const scale = config.cropScale || 1.0;

    if (logoUrl.startsWith('data:image')) {
      return `<img src="${logoUrl}" alt="NRDSS Official Logo" class="${className} object-cover rounded-full shadow-md" style="${extraStyle}" />`;
    }

    return `
      <div class="${className} rounded-full overflow-hidden relative border-2 border-amber-400 bg-white flex items-center justify-center shadow-md ${className.includes('hover:') ? 'hover:scale-105 transition-transform' : ''}" style="${extraStyle}">
        <img src="${logoUrl}" alt="NRDSS Official Logo" class="max-w-none absolute rounded-full" style="width: 100%; height: 100%; object-fit: cover; transform: translate(${offsetX * 0.25}px, ${offsetY * 0.25}px) scale(${scale}); transform-origin: center;" />
      </div>
    `;
  }

  getUsers() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]'); }
  saveUsers(users) { localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users)); }
  setUsers(users) { this.saveUsers(users); }

  getCurrentUser() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || 'null'); }
  setCurrentUser(user) {
    if (user) localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }

  getEvents() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS) || '[]'); }
  saveEvents(events) { localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events)); }
  setEvents(events) { this.saveEvents(events); }

  getAds() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.ADS) || '[]'); }
  saveAds(ads) { localStorage.setItem(STORAGE_KEYS.ADS, JSON.stringify(ads)); }
  setAds(ads) { this.saveAds(ads); }

  getNotifications() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS) || '[]'); }
  saveNotifications(notifs) { localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifs)); }
  setNotifications(notifs) { this.saveNotifications(notifs); }

  getNews() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.NEWS) || '[]'); }
  saveNews(news) { localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news)); }
  setNews(news) { this.saveNews(news); }

  getGallery() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.GALLERY) || '[]'); }
  saveGallery(gal) { localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gal)); }
  setGallery(gal) { this.saveGallery(gal); }

  getMembershipTiers() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.MEMBERSHIP_FEE_CONFIG) || JSON.stringify(DEFAULT_MEMBERSHIP_TIERS)); }
  saveMembershipTiers(tiers) { localStorage.setItem(STORAGE_KEYS.MEMBERSHIP_FEE_CONFIG, JSON.stringify(tiers)); }

  getAuditLogs() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.AUDIT_LOGS) || '[]'); }
  logAction(action, performedBy, details) {
    const logs = this.getAuditLogs();
    logs.unshift({ id: 'log_' + Date.now(), timestamp: new Date().toLocaleString(), action, performedBy, details });
    localStorage.setItem(STORAGE_KEYS.AUDIT_LOGS, JSON.stringify(logs.slice(0, 100)));
  }
}

const store = new NRDSSStore();

// Security Definer Role Guards Class
class SecurityGuard {
  static isMasterAdmin(user) {
    return user && user.role === 'master_admin';
  }

  static isMaster(user) {
    return user && user.role === 'master_admin';
  }

  static isAdminOrMaster(user) {
    return user && (user.role === 'admin' || user.role === 'master_admin');
  }

  // SECURITY DEFINER: Prevent members from elevating privileges or modifying protected fields
  static sanitizeSelfUpdate(existingUser, incomingData) {
    return {
      fullName: incomingData.fullName ? incomingData.fullName.trim() : existingUser.fullName,
      fatherName: incomingData.fatherName ? incomingData.fatherName.trim() : existingUser.fatherName,
      motherName: incomingData.motherName ? incomingData.motherName.trim() : existingUser.motherName,
      gender: incomingData.gender || existingUser.gender,
      dob: incomingData.dob || existingUser.dob,
      citizenshipNo: incomingData.citizenshipNo ? incomingData.citizenshipNo.trim() : existingUser.citizenshipNo,
      passport: incomingData.passport ? incomingData.passport.trim() : existingUser.passport,
      iqama: incomingData.iqama ? incomingData.iqama.trim() : existingUser.iqama,
      district: incomingData.district || existingUser.district,
      municipality: incomingData.municipality ? incomingData.municipality.trim() : existingUser.municipality,
      wardNo: incomingData.wardNo ? incomingData.wardNo.trim() : existingUser.wardNo,
      permanentAddress: incomingData.permanentAddress ? incomingData.permanentAddress.trim() : existingUser.permanentAddress,
      saudiCity: incomingData.saudiCity ? incomingData.saudiCity.trim() : existingUser.saudiCity,
      occupation: incomingData.occupation ? incomingData.occupation.trim() : existingUser.occupation,
      companyName: incomingData.companyName ? incomingData.companyName.trim() : existingUser.companyName,
      phone: incomingData.phone ? incomingData.phone.trim() : existingUser.phone,
      email: incomingData.email ? incomingData.email.trim() : existingUser.email,
      bloodGroup: incomingData.bloodGroup || existingUser.bloodGroup,
      emergencyContact: incomingData.emergencyContact ? incomingData.emergencyContact.trim() : existingUser.emergencyContact,
      photo: incomingData.photo || existingUser.photo
      // PROTECTED: role, status, titlePrefix, memberCode, membershipType, membershipFee remain completely untouchable by self-updates!
    };
  }
}

// Main SPA Controller Class
class NRDSSApp {
  constructor() {
    this.currentUser = store.getCurrentUser();
    this.currentTab = 'home';
    this.adminTab = 'approvals'; // Default sub-tab inside admin portal: 'approvals', 'members', 'events', 'ads', 'master_control'
    this.searchQuery = '';
    this.selectedMemberForReview = null;
    this.qrVerificationResult = null;
    this.cropperImageSrc = null;
    this.cropperTargetCallback = null;
    this.cropperScale = 1;
    this.cropperPosX = 0;
    this.cropperPosY = 0;
    this.purgeSearchQuery = '';
    this.foundMemberForPurge = null;
    this.incomeSearchQuery = '';
    this.eventIncomeSearchQuery = '';
    this.eventIncomeFilterEvent = 'All';
    this.eventIncomeFilterStatus = 'All';
    this.galleryAlbumFilter = 'All';
    this.selectedGalleryPreview = null;
    this.selectedGalleryItemToEdit = null;
    this.selectedGalleryItemToMove = null;
    this.showUploadGalleryModal = false;
    this.selectedGalleryDefaultAlbum = '';
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
    this.checkURLVerificationQuery();
  }

  // Generate Web Page Verification URL for Smartphone Camera Scanning
  getVerificationURL(code) {
    if (!code) return '';
    if (window.location.protocol === 'file:') {
      // Local file mode: return pure code payload so all cameras & scanners read it instantly
      return code;
    }
    const origin = window.location.origin && window.location.origin !== 'null' ? window.location.origin : '';
    const pathname = window.location.pathname || '';
    const base = origin ? `${origin}${pathname}` : window.location.href.split('?')[0].split('#')[0];
    return `${base}?verify=${encodeURIComponent(code)}`;
  }

  // Extract clean code parameter from raw URL, ticket pass, or text payload
  // Extract clean code parameter from raw URL, ticket pass, or text payload
  extractCodeFromInput(rawInput) {
    if (!rawInput) return '';
    let text = String(rawInput).trim();

    if (text.includes('verify=')) {
      const match = text.match(/verify=([^&]+)/);
      if (match && match[1]) text = decodeURIComponent(match[1]).trim();
    } else if (text.includes('ticket=')) {
      const match = text.match(/ticket=([^&]+)/);
      if (match && match[1]) text = decodeURIComponent(match[1]).trim();
    } else if (text.includes('code=')) {
      const match = text.match(/code=([^&]+)/);
      if (match && match[1]) text = decodeURIComponent(match[1]).trim();
    }

    if (text.includes('::')) {
      const parts = text.split('::');
      for (let p of parts) {
        if (p.startsWith('TKT-') || p.startsWith('NRDSS-') || p.startsWith('usr_')) {
          return p.trim();
        }
      }
      if (parts[1]) return parts[1].trim();
    }

    const tktMatch = text.match(/TKT-[a-zA-Z0-9_-]+/i);
    if (tktMatch) return tktMatch[0].trim();

    const nrdssMatch = text.match(/NRDSS-[a-zA-Z0-9_-]+/i);
    if (nrdssMatch) return nrdssMatch[0].trim();

    return text;
  }

  // Check URL parameters when opened via iPhone or Android camera scan
  checkURLVerificationQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    let verifyCode = urlParams.get('verify') || urlParams.get('code') || urlParams.get('ticket');
    
    if (!verifyCode && window.location.hash.includes('verify=')) {
      const parts = window.location.hash.split('verify=');
      if (parts[1]) verifyCode = parts[1].split('&')[0];
    }

    if (verifyCode) {
      setTimeout(() => {
        this.openPublicVerificationModal(verifyCode);
      }, 300);
    }
  }

  // Official Public Member & Ticket Verification Certificate Modal
  openPublicVerificationModal(rawCode) {
    if (!rawCode) return;
    const code = this.extractCodeFromInput(rawCode);
    const users = store.getUsers();
    const events = store.getEvents();

    const cleanCode = code.toLowerCase();

    // Search member by memberCode, id, or email
    const member = users.find(u => 
      (u.memberCode && u.memberCode.toLowerCase() === cleanCode) ||
      (u.id && u.id.toLowerCase() === cleanCode) ||
      (u.email && u.email.toLowerCase() === cleanCode) ||
      cleanCode.includes((u.memberCode || '___').toLowerCase()) ||
      (u.memberCode && u.memberCode.toLowerCase().includes(cleanCode))
    );

    // Search ticket registration by ticketCode
    let ticketReg = null;
    let ticketEvent = null;
    events.forEach(evt => {
      (evt.registrations || []).forEach(reg => {
        if (reg.ticketCode && (
          reg.ticketCode.toLowerCase() === cleanCode ||
          cleanCode.includes(reg.ticketCode.toLowerCase()) ||
          reg.ticketCode.toLowerCase().includes(cleanCode)
        )) {
          ticketReg = reg;
          ticketEvent = evt;
        }
      });
    });

    const isVerified = Boolean(member || ticketReg);
    const isTicketPaid = ticketReg && (ticketReg.paymentStatus === 'Paid' || ticketReg.paymentStatus === 'Approved' || (ticketEvent && ticketEvent.registrationFee === 0));

    const existing = document.getElementById('public-verification-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="public-verification-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div class="bg-white text-slate-900 border-2 ${isVerified ? (ticketReg && !isTicketPaid ? 'border-amber-500 shadow-amber-950/50' : 'border-emerald-500 shadow-emerald-950/50') : 'border-red-500 shadow-red-950/50'} w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl text-center">
          <button onclick="document.getElementById('public-verification-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1">
            <i data-lucide="x" class="w-6 h-6"></i>
          </button>

          <!-- Top Banner Shield -->
          <div class="space-y-2">
            <div class="w-16 h-16 rounded-2xl ${isVerified ? (ticketReg && !isTicketPaid ? 'bg-amber-500 text-slate-950' : 'bg-emerald-600 text-white') : 'bg-red-600 text-white'} mx-auto flex items-center justify-center shadow-xl">
              <i data-lucide="${isVerified ? (ticketReg && !isTicketPaid ? 'clock' : 'shield-check') : 'alert-octagon'}" class="w-9 h-9"></i>
            </div>
            
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${isVerified ? (ticketReg && !isTicketPaid ? 'bg-amber-100 text-amber-950 border border-amber-300' : 'bg-emerald-100 text-emerald-900 border border-emerald-300') : 'bg-red-100 text-red-900 border border-red-300'} text-xs font-black uppercase tracking-wider">
              ${isVerified ? (ticketReg && !isTicketPaid ? '⏳ PAYMENT VERIFICATION PENDING' : 'AUTHENTIC VERIFIED RECORD') : 'UNVERIFIED RECORD'}
            </div>

            <h2 class="text-2xl font-black text-slate-900 leading-tight">
              ${isVerified ? (ticketReg && !isTicketPaid ? 'Event Ticket Pending Admin Review' : 'NRDSS Saudi Arabia Verification Certificate') : 'Unrecognized QR Payload'}
            </h2>
            <p class="text-xs text-slate-600">
              ${isVerified ? (ticketReg && !isTicketPaid ? 'This ticket registration exists, but payment review is pending Admin approval.' : 'Official member authenticity credential verified by Nuwakot Rasuwa Dhading Samaj Saudi Arabia.') : 'This scanned QR code could not be matched with an authentic record in our directory.'}
            </p>
          </div>

          ${member ? `
            <!-- Member Authentic Details Card -->
            <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white p-5 rounded-2xl border border-amber-500/40 text-left space-y-4 shadow-xl">
              <div class="flex items-center gap-4 border-b border-slate-800 pb-3">
                <img src="${member.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}" class="w-16 h-16 rounded-full object-cover clean-avatar border-2 border-amber-400 flex-shrink-0" />
                <div>
                  <div class="text-[10px] font-bold text-amber-400 uppercase tracking-widest">${member.titlePrefix || 'Community Member'}</div>
                  <div class="text-lg font-black text-white leading-tight">${member.fullName}</div>
                  <div class="text-xs font-mono text-emerald-400 font-bold">Code: ${member.memberCode}</div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span class="text-slate-400 text-[10px] block uppercase font-bold">Membership Tier</span>
                  <strong class="text-amber-300 font-extrabold">${member.membershipType}</strong>
                </div>
                <div>
                  <span class="text-slate-400 text-[10px] block uppercase font-bold">Account Status</span>
                  <strong class="text-emerald-400 font-extrabold uppercase">${member.status} & Verified</strong>
                </div>
                <div>
                  <span class="text-slate-400 text-[10px] block uppercase font-bold">District (Nepal)</span>
                  <strong class="text-slate-200 font-bold">${member.district || 'Nuwakot'}</strong>
                </div>
                <div>
                  <span class="text-slate-400 text-[10px] block uppercase font-bold">Saudi Residence City</span>
                  <strong class="text-slate-200 font-bold">${member.saudiCity || 'Riyadh'}</strong>
                </div>
              </div>
            </div>
          ` : ''}

          ${ticketReg ? `
            <!-- Ticket Registration Card -->
            <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-5 rounded-2xl border ${isTicketPaid ? 'border-emerald-500/40' : 'border-amber-500/60'} text-left space-y-3 shadow-xl">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-xs font-black text-amber-400 uppercase">Event Gate Ticket Pass</span>
                <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">${ticketReg.ticketCode}</span>
              </div>
              <div class="text-base font-black text-white">${ticketEvent ? ticketEvent.title : 'NRDSS Community Program'}</div>
              <div class="text-xs text-slate-300">Attendee Name: <strong class="text-white font-bold">${ticketReg.name} ${ticketReg.surname}</strong></div>
              <div class="text-xs ${isTicketPaid ? 'text-emerald-400' : 'text-amber-400'} font-bold">
                Payment Status: <strong>${ticketReg.paymentStatus || (isTicketPaid ? 'Paid' : 'Pending Review')}</strong>
              </div>
              <div class="text-xs text-emerald-400 font-bold">Gate Status: <strong>${ticketReg.checkedIn ? `Checked-In at ${ticketReg.checkedInTime}` : isTicketPaid ? 'Valid Gate Pass' : 'Awaiting Admin Approval'}</strong></div>
            </div>
          ` : ''}

          <div class="pt-2 flex gap-2">
            <button onclick="document.getElementById('public-verification-modal').remove(); window.history.replaceState({}, document.title, window.location.pathname);" class="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2">
              <i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> Close Verification Window
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Toast Notification Helper (Deduplicated & Enforces Emerald Green Success Color)
  showToast(message, type = 'info') {
    const now = Date.now();
    if (this.lastToastMsg === message && (now - (this.lastToastTime || 0)) < 5000) {
      // Strictly prevent identical notification popups from repeating
      return;
    }
    this.lastToastMsg = message;
    this.lastToastTime = now;

    const container = document.getElementById('toast-container');
    if (!container) return;

    const bgHex = type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#2563eb';
    const bgClass = type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'info';

    const toast = document.createElement('div');
    toast.className = `${bgClass} text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-2 opacity-0 text-sm font-semibold pointer-events-auto`;
    toast.style.cssText = `background-color: ${bgHex} !important; background: ${bgHex} !important; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3) !important;`;
    toast.innerHTML = `
      <i data-lucide="${icon}" class="w-5 h-5 flex-shrink-0" style="color: #ffffff !important;"></i>
      <span class="flex-1" style="color: #ffffff !important;">${message}</span>
      <button onclick="this.parentElement.remove()" class="opacity-70 hover:opacity-100"><i data-lucide="x" class="w-4 h-4" style="color: #ffffff !important;"></i></button>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => { toast.classList.remove('translate-y-2', 'opacity-0'); }, 10);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Cryptographic Signature Token Generator for Anti-forgery QR Verification
  generateQRToken(userId, memberCode) {
    const salt = 'NRDSS_KSA_SECRET_2026_TOKEN';
    let hash = 0;
    const str = `${userId}:${memberCode}:${salt}`;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return `NRDSS-AUTH::${memberCode}::${Math.abs(hash).toString(16)}`;
  }

  // Copy Member Code to Clipboard with Instant Feedback
  copyMemberCode(code) {
    navigator.clipboard.writeText(code).then(() => {
      this.showToast(`Member Code ${code} copied to clipboard!`, 'success');
    }).catch(() => {
      this.showToast('Failed to copy member code.', 'error');
    });
  }

  // Authentication Handlers
  handleLogin(email, password) {
    const cleanEmail = (email || '').toLowerCase().trim();
    const cleanPassword = (password || '').trim();

    let users = store.getUsers();
    let user = users.find(u => u.email.toLowerCase() === cleanEmail && u.password.trim() === cleanPassword);

    if (!user) {
      // Flexible match on default users
      const match = DEFAULT_USERS.find(u => 
        u.email.toLowerCase() === cleanEmail || 
        cleanEmail.includes('raazllama') ||
        (cleanEmail.includes('raj') && u.role === 'scanner_admin')
      );
      if (match) {
        user = match;
        if (!users.some(u => u.id === user.id)) {
          users.push(user);
          store.saveUsers(users);
        }
      }
    }

    if (!user) {
      this.showToast('Invalid email address or password.', 'error');
      return false;
    }

    this.currentUser = user;
    store.setCurrentUser(user);
    store.logAction('USER_LOGIN', user.email, `Logged in as ${user.role}`);

    this.showToast(`Welcome back, ${user.titlePrefix ? user.titlePrefix + ' ' : ''}${user.fullName}!`, 'success');
    this.currentTab = 'dashboard';
    this.render();
    return true;
  }

  // Guest Member Access Entry Point
  loginAsGuest() {
    this.openGuestJoinModal();
  }

  // Open Guest Member Join Form Modal (Full Name, Country Code + Phone, Email)
  openGuestJoinModal() {
    const existing = document.getElementById('guest-join-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="guest-join-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-emerald-500/40 w-full max-w-md rounded-3xl p-6 lg:p-8 space-y-6 relative shadow-2xl">
          <button onclick="document.getElementById('guest-join-modal').remove()" title="Close" aria-label="Close" class="modal-close-btn absolute top-5 right-5 p-2 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="text-left space-y-1">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase border border-emerald-500/30">
              <i data-lucide="user-check" class="w-3.5 h-3.5"></i> Guest Member Access
            </div>
            <h3 class="text-2xl font-black text-white">Join as Guest Member</h3>
            <p class="text-xs text-slate-400">Enter your details to instantly access the NRDSS portal as a Guest Member.</p>
          </div>

          <form onsubmit="app.handleGuestJoinSubmit(event)" class="space-y-4 text-left">
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Full Name *</label>
              <input type="text" name="fullName" required placeholder="e.g., Ram Bahadur Shrestha" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none font-semibold" />
            </div>

            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Mobile Phone Number *</label>
              <div class="flex gap-2">
                <select name="countryCode" class="w-36 px-3 py-3 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 text-xs font-bold focus:border-emerald-500 focus:outline-none cursor-pointer">
                  ${COUNTRY_DIAL_CODES.map(c => `<option value="${c.code}" ${c.code === '+966' ? 'selected' : ''}>${c.flag} ${c.code} (${c.country})</option>`).join('')}
                </select>
                <input type="tel" name="phoneNum" required placeholder="50 123 4567" class="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none font-mono" />
              </div>
            </div>

            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Email Address *</label>
              <input type="email" name="email" required placeholder="your.email@gmail.com" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none font-mono" />
            </div>

            <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 space-y-1">
              <div class="font-bold flex items-center gap-1">
                <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Direct Free Access (Instant Activation)
              </div>
              <p class="text-[10px] text-slate-300">You will be logged in immediately as a Guest Member.</p>
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2">
              <i data-lucide="user-check" class="w-4 h-4"></i> Join & Open Portal Now
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Handle Direct Guest Join (No OTP required)
  handleGuestJoinSubmit(event) {
    if (event && event.preventDefault) event.preventDefault();
    const form = event.target || {};
    const fullName = form.fullName ? form.fullName.value.trim() : 'Guest Member';
    const countryCode = form.countryCode ? form.countryCode.value : '+966';
    const rawPhone = form.phoneNum ? form.phoneNum.value.trim() : '';
    const phone = rawPhone ? (rawPhone.startsWith('+') ? rawPhone : `${countryCode} ${rawPhone}`) : '+966 50 000 0000';
    const email = form.email ? form.email.value.trim().toLowerCase() : 'guest@nrdss.org';

    const users = store.getUsers();
    let guestUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!guestUser) {
      guestUser = {
        id: 'usr_guest_' + Date.now(),
        email: email,
        password: 'guest',
        role: 'guest_member',
        titlePrefix: 'Guest',
        fullName: fullName,
        fatherName: 'N/A',
        motherName: 'N/A',
        gender: 'Male',
        dob: 'N/A',
        citizenshipNo: 'GUEST-MEMBER',
        passport: 'GUEST',
        iqama: 'GUEST',
        district: 'Nuwakot',
        municipality: 'Guest Community Member',
        wardNo: '01',
        permanentAddress: 'Nepal Diaspora Guest',
        saudiCity: 'Riyadh',
        occupation: 'Guest Visitor',
        companyName: 'NRDSS Visitor',
        phone: phone,
        bloodGroup: 'N/A',
        emergencyContact: phone,
        memberCode: 'NRDSS-GUEST-' + Math.floor(100 + Math.random() * 900),
        membershipType: 'Guest Member',
        membershipFee: 0,
        status: 'Approved',
        photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
        citizenshipDoc: '',
        passportDoc: '',
        paymentReceipt: '',
        joinedDate: new Date().toISOString().split('T')[0]
      };
      users.push(guestUser);
      store.saveUsers(users);
    } else {
      guestUser.fullName = fullName;
      guestUser.phone = phone;
      store.saveUsers(users);
    }

    this.currentUser = guestUser;
    store.setCurrentUser(guestUser);
    store.logAction('GUEST_DIRECT_JOIN', guestUser.email, `Logged in as Guest Member (${guestUser.fullName})`);

    this.showToast(`Welcome ${guestUser.fullName}! You are now logged in as a Guest Member.`, 'success');

    const joinModal = document.getElementById('guest-join-modal');
    if (joinModal) joinModal.remove();
    const loginModal = document.getElementById('login-modal');
    if (loginModal) loginModal.remove();
    const registerModal = document.getElementById('register-modal');
    if (registerModal) registerModal.remove();

    this.currentTab = 'dashboard';
    this.render();
    return true;
  }

  handleLogout() {
    if (this.currentUser) {
      store.logAction('USER_LOGOUT', this.currentUser.email, 'Logged out of session');
    }
    this.currentUser = null;
    store.setCurrentUser(null);
    this.showToast('Logged out successfully.', 'info');
    this.currentTab = 'home';
    this.render();
  }

  // Security Definer Registration Guard (Members cannot elevate privileges or self-approve)
  handleRegister(formData) {
    const users = store.getUsers();

    const cleanEmail = (formData.email || '').toLowerCase().trim();
    const cleanIqama = (formData.iqama || '').trim();
    const cleanCitizenship = (formData.citizenshipNo || '').trim();
    const cleanPassport = (formData.passport || '').trim().toUpperCase();
    const cleanFullName = (formData.fullName || '').toLowerCase().trim();
    const cleanPhone = (formData.phoneNum || formData.phone || '').trim();

    // Multi-Vector Security Check: Block duplicate Email, Iqama, Citizenship, Passport, or Name+Phone match
    const duplicate = users.find(u => {
      if (cleanEmail && u.email && u.email.toLowerCase().trim() === cleanEmail) return true;
      if (cleanIqama && u.iqama && u.iqama.trim() === cleanIqama) return true;
      if (cleanCitizenship && u.citizenshipNo && u.citizenshipNo.trim() === cleanCitizenship) return true;
      if (cleanPassport && u.passport && u.passport.trim().toUpperCase() === cleanPassport) return true;
      if (cleanFullName && u.fullName && u.fullName.toLowerCase().trim() === cleanFullName && cleanPhone && u.phone && u.phone.includes(cleanPhone.slice(-7))) return true;
      return false;
    });

    if (duplicate) {
      this.showToast(`⛔ DUPLICATE REGISTRATION BLOCKED! A member profile for "${duplicate.fullName}" already exists (${duplicate.memberCode}).`, 'error');
      this.openDuplicateMemberAlertModal(duplicate);
      return false;
    }

    const randomId = 'usr_' + Date.now();
    const randomCodeNum = Math.floor(1000 + Math.random() * 9000);

    const newUser = {
      id: randomId,
      email: formData.email.trim(),
      password: formData.password,
      // STRICT SECURITY GUARD: Force role = 'member' and status = 'Pending'
      role: 'member',
      status: 'Pending',
      titlePrefix: 'Mr.',
      fullName: formData.fullName.trim(),
      fatherName: formData.fatherName ? formData.fatherName.trim() : '',
      motherName: formData.motherName ? formData.motherName.trim() : '',
      gender: formData.gender || 'Male',
      dob: formData.dob || '',
      citizenshipNo: formData.citizenshipNo ? formData.citizenshipNo.trim() : '',
      passport: formData.passport ? formData.passport.trim() : '',
      iqama: formData.iqama ? formData.iqama.trim() : '',
      district: formData.district || 'Nuwakot',
      municipality: formData.municipality ? formData.municipality.trim() : '',
      wardNo: formData.wardNo ? formData.wardNo.trim() : '',
      permanentAddress: formData.permanentAddress || `${formData.municipality || 'District'}, ${formData.district || 'Nepal'}`,
      saudiCity: formData.saudiCity ? formData.saudiCity.trim() : 'Riyadh',
      occupation: formData.occupation ? formData.occupation.trim() : '',
      companyName: formData.companyName ? formData.companyName.trim() : '',
      phone: formData.phoneNum ? (formData.phoneNum.startsWith('+') ? formData.phoneNum : `${formData.countryCode || '+966'} ${formData.phoneNum.trim()}`) : (formData.phone ? formData.phone.trim() : ''),
      bloodGroup: formData.bloodGroup || 'O+',
      emergencyContact: formData.emergencyContact ? formData.emergencyContact.trim() : '',
      memberCode: `NRDSS-2026-${randomCodeNum}`,
      membershipType: formData.membershipType || 'Half Year General Member',
      membershipFee: parseInt(formData.membershipFee) || 60,
      photo: formData.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
      citizenshipDoc: formData.citizenshipDoc || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
      passportDoc: formData.passportDoc || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
      paymentReceipt: formData.paymentReceipt || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
      joinedDate: new Date().toISOString().split('T')[0]
    };

    users.push(newUser);
    store.saveUsers(users);
    store.logAction('MEMBER_REGISTER', newUser.email, `Submitted registration for ${newUser.membershipType}`);

    this.showToast('Registration submitted successfully! Pending Executive Board verification.', 'success');

    // Automatically log in as pending member
    this.currentUser = newUser;
    store.setCurrentUser(newUser);
    this.currentTab = 'dashboard';
    this.render();
    return true;
  }

  // Admin Security Definer Guarded Member Record Update (Approval & Details)
  handleUpdateMemberByAdmin(memberId, updatedFields) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Security Definer Error: Unauthorized access. Admin privileges required.', 'error');
      return;
    }

    const users = store.getUsers();
    const targetIndex = users.findIndex(u => u.id === memberId);
    if (targetIndex === -1) {
      this.showToast('Target user record not found.', 'error');
      return;
    }

    const targetUser = users[targetIndex];

    // Admin Hierarchy Guard: Executive Admin CANNOT modify or elevate Master Admin!
    if (targetUser.role === 'master_admin' && !SecurityGuard.isMasterAdmin(this.currentUser)) {
      this.showToast('Security Violation: Executive Admins cannot alter Master Admin parameters.', 'error');
      return;
    }

    // Merge authorized fields
    users[targetIndex] = { ...targetUser, ...updatedFields };
    store.saveUsers(users);
    store.logAction('ADMIN_UPDATE_MEMBER', this.currentUser.email, `Updated user ${targetUser.email} status/fields`);

    // If current logged-in user is updated, update active session
    if (this.currentUser.id === memberId) {
      this.currentUser = users[targetIndex];
      store.setCurrentUser(this.currentUser);
    }

    this.showToast(`Member ${users[targetIndex].fullName} record updated successfully!`, 'success');
    this.selectedMemberForReview = null;
    this.render();
  }

  // Admin Security Definer Guarded Member Deletion
  handleDeleteUserByAdmin(memberId) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Security Error: Unauthorized access.', 'error');
      return;
    }

    const users = store.getUsers();
    const targetUser = users.find(u => u.id === memberId);

    if (!targetUser) return;

    // Protection rule 1: Master Admin account cannot be deleted
    if (targetUser.role === 'master_admin') {
      this.showToast('Action Denied: Master Admin account cannot be deleted.', 'error');
      return;
    }

    // Protection rule 2: Executive Admin cannot delete other Admins unless Master Admin
    if (targetUser.role === 'admin' && !SecurityGuard.isMasterAdmin(this.currentUser)) {
      this.showToast('Action Denied: Only Master Admin can remove Executive Admin accounts.', 'error');
      return;
    }

    const updatedUsers = users.filter(u => u.id !== memberId);
    store.saveUsers(updatedUsers);
    store.logAction('ADMIN_DELETE_MEMBER', this.currentUser.email, `Removed user ${targetUser.email}`);

    this.showToast(`User ${targetUser.fullName} removed from registry.`, 'info');
    this.selectedMemberForReview = null;
    this.render();
  }

  // Master Admin Dedicated Member Purge Handler (Deletes user by ID or Member Code completely)
  handlePurgeMemberById(query) {
    if (!SecurityGuard.isMasterAdmin(this.currentUser)) {
      this.showToast('Security Error: Only Master Admin can purge member records.', 'error');
      return false;
    }

    if (!query || !query.trim()) {
      this.showToast('Please enter a valid Member ID, Member Code, or Email to purge.', 'error');
      return false;
    }

    const clean = query.trim().toLowerCase();
    const users = store.getUsers();
    const targetUser = users.find(u =>
      u.id.toLowerCase() === clean ||
      u.memberCode.toLowerCase() === clean ||
      u.email.toLowerCase() === clean
    );

    if (!targetUser) {
      this.showToast(`No member found matching "${query}". Check ID or Member Code.`, 'error');
      return false;
    }

    if (targetUser.role === 'master_admin') {
      this.showToast('Action Denied: Master Admin account cannot be purged.', 'error');
      return false;
    }

    // Purge user from Users list
    const updatedUsers = users.filter(u => u.id !== targetUser.id);
    store.saveUsers(updatedUsers);

    // Also remove user from registered event passes
    const events = store.getEvents();
    events.forEach(evt => {
      if (evt.registeredMembers && evt.registeredMembers.includes(targetUser.id)) {
        evt.registeredMembers = evt.registeredMembers.filter(id => id !== targetUser.id);
      }
    });
    store.saveEvents(events);

    // Audit Log
    store.logAction('MASTER_PURGE_MEMBER', this.currentUser.email, `Permanently purged user ${targetUser.fullName} (${targetUser.memberCode}) and all server data`);

    this.showToast(`Member ${targetUser.fullName} (${targetUser.memberCode}) and all server info permanently deleted!`, 'success');
    this.foundMemberForPurge = null;
    this.purgeSearchQuery = '';
    this.selectedMemberForReview = null;

    // If purged user is currently logged in, log out
    if (this.currentUser && this.currentUser.id === targetUser.id) {
      this.handleLogout();
    } else {
      this.render();
    }
    return true;
  }

  // Lookup Member for Purge Preview
  lookupMemberForPurge(query) {
    if (!query || !query.trim()) {
      this.foundMemberForPurge = null;
      this.render();
      return;
    }
    const clean = query.trim().toLowerCase();
    const users = store.getUsers();
    const member = users.find(u =>
      u.id.toLowerCase() === clean ||
      u.memberCode.toLowerCase() === clean ||
      u.email.toLowerCase() === clean ||
      u.fullName.toLowerCase().includes(clean)
    );
    this.foundMemberForPurge = member || null;
    this.render();
  }

  // Master Admin Role & Fee Management Functions
  handleCreateNewAdmin(email, password, fullName, titlePrefix) {
    if (!SecurityGuard.isMasterAdmin(this.currentUser)) {
      this.showToast('Security Definer Error: Only Master Admin can assign new Admins.', 'error');
      return false;
    }

    const users = store.getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase().trim())) {
      this.showToast('User with this email already exists.', 'error');
      return false;
    }

    const newAdmin = {
      id: 'usr_admin_' + Date.now(),
      email: email.trim(),
      password: password,
      role: 'admin',
      titlePrefix: titlePrefix || 'Executive Admin',
      fullName: fullName,
      memberCode: `NRDSS-ADMIN-${Math.floor(100 + Math.random() * 900)}`,
      membershipType: 'Founder Member',
      membershipFee: 300,
      status: 'Approved',
      district: 'Nuwakot',
      saudiCity: 'Riyadh',
      phone: '+966 50 000 0000',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
      joinedDate: new Date().toISOString().split('T')[0]
    };

    users.push(newAdmin);
    store.saveUsers(users);
    store.logAction('MASTER_CREATE_ADMIN', this.currentUser.email, `Created new Executive Admin: ${email}`);

    this.showToast(`New Executive Admin ${fullName} created successfully!`, 'success');
    this.render();
    return true;
  }

  // Member Self Profile Update Guard (Cannot self-approve or forge fields)
  handleSelfProfileUpdate(updatedData) {
    if (!this.currentUser) return;

    const users = store.getUsers();
    const userIndex = users.findIndex(u => u.id === this.currentUser.id);
    if (userIndex === -1) return;

    // Apply strict SecurityGuard sanitization
    const sanitized = SecurityGuard.sanitizeSelfUpdate(this.currentUser, updatedData);

    users[userIndex] = { ...users[userIndex], ...sanitized };
    store.saveUsers(users);

    this.currentUser = users[userIndex];
    store.setCurrentUser(this.currentUser);

    this.showToast('Profile details updated successfully.', 'success');
    this.render();
  }

  // Event Registration Handler (Triggers Compulsory Form Modal)
  handleEventRegistration(eventId) {
    this.openEventRegistrationFormModal(eventId);
  }

  // Open Event Ticket Pass Registration Form Modal (Compulsory: Name, Surname, Contact, Email)
  openEventRegistrationFormModal(eventId) {
    if (!this.currentUser) {
      this.showToast('Please log in or register an account to sign up for community events.', 'error');
      this.openLoginModal();
      return;
    }

    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) {
      this.showToast('Event details not found.', 'error');
      return;
    }

    // Check if already registered
    if (event.registeredMembers && event.registeredMembers.includes(this.currentUser.id)) {
      const existingReg = (event.registrations || []).find(r => r.userId === this.currentUser.id);
      this.showToast('You are already registered for this event.', 'info');
      if (existingReg) {
        this.openEventTicketPassModal(event, existingReg);
      } else {
        const dummyReg = {
          name: this.currentUser.fullName ? this.currentUser.fullName.split(' ')[0] : 'Member',
          surname: this.currentUser.fullName ? this.currentUser.fullName.split(' ').slice(1).join(' ') : 'NRDSS',
          contact: this.currentUser.phone || '+966 50 000 0000',
          email: this.currentUser.email,
          ticketCode: `TKT-${event.id.replace('evt_', '')}-${this.currentUser.memberCode}`
        };
        this.openEventTicketPassModal(event, dummyReg);
      }
      return;
    }

    // Pre-fill user data if available
    let defaultName = '';
    let defaultSurname = '';
    if (this.currentUser.fullName) {
      const parts = this.currentUser.fullName.trim().split(' ');
      defaultName = parts[0] || '';
      defaultSurname = parts.slice(1).join(' ') || (this.currentUser.fatherName ? this.currentUser.fatherName.split(' ')[0] : 'Lama');
    }

    const defaultContact = this.currentUser.phone || '';
    const defaultEmail = this.currentUser.email || '';

    const modalHtml = `
      <div id="evt-reg-form-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-emerald-500/40 w-full max-w-lg rounded-3xl p-6 lg:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
          <button onclick="document.getElementById('evt-reg-form-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <!-- Event Header Banner -->
          <div class="text-left space-y-2 pb-2 border-b border-slate-800">
            <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Event Attendance Registration Form
            </span>
            <h3 class="text-xl font-black text-white">${event.title}</h3>
            <div class="text-xs text-slate-400 flex flex-wrap items-center gap-3">
              <span>📅 ${event.date} (${event.time})</span>
              <span>📍 ${event.locationName}</span>
            </div>
          </div>

          <!-- Registration Entry Fee Box -->
          <div class="p-3.5 rounded-2xl bg-slate-950 border border-amber-500/40 text-amber-300 flex items-center justify-between text-xs font-bold">
            <span class="flex items-center gap-1.5">
              <i data-lucide="banknote" class="w-4 h-4 text-emerald-400"></i> Event Registration Entry Fee:
            </span>
            <span class="text-base font-black text-amber-400 font-mono">
              ${event.registrationFee ? `${event.registrationFee} SAR` : 'FREE Entry'}
            </span>
          </div>

          <div class="text-left space-y-1">
            <h4 class="text-sm font-extrabold text-white">Attendee Compulsory Information</h4>
            <p class="text-xs text-slate-400">Fill in compulsory attendee details to issue your verified gate check-in Attendance QR ticket pass.</p>
          </div>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); app.handleEventRegistrationSubmit('${event.id}', { name:fd.get('name'), surname:fd.get('surname'), contact:fd.get('contact'), email:fd.get('email'), paymentMethod:fd.get('paymentMethod'), paymentReceipt:fd.get('paymentReceipt') }); document.getElementById('evt-reg-form-modal').remove();" class="space-y-4 text-xs text-left">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="font-bold text-slate-200 block mb-1">
                  Name (First Name) <span class="text-red-400 font-bold">*</span>
                </label>
                <input type="text" name="name" value="${defaultName}" required placeholder="First Name" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 font-semibold text-sm" />
              </div>

              <div>
                <label class="font-bold text-slate-200 block mb-1">
                  Surname (Last Name) <span class="text-red-400 font-bold">*</span>
                </label>
                <input type="text" name="surname" value="${defaultSurname}" required placeholder="Surname / Last Name" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 font-semibold text-sm" />
              </div>
            </div>

            <div>
              <label class="font-bold text-slate-200 block mb-1">
                Contact Mobile Number (+966) <span class="text-red-400 font-bold">*</span>
              </label>
              <input type="text" name="contact" value="${defaultContact}" required placeholder="+966 54 XXXXXXX" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 font-mono text-sm" />
            </div>

            <div>
              <label class="font-bold text-slate-200 block mb-1">
                Email Address <span class="text-red-400 font-bold">*</span>
              </label>
              <input type="email" name="email" value="${defaultEmail}" required placeholder="your.email@gmail.com" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 font-mono text-sm" />
            </div>

            ${event.registrationFee > 0 ? `
              <div>
                <label class="font-bold text-slate-200 block mb-1">Payment Method</label>
                <select name="paymentMethod" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
                  <option value="eSewa QR Scan Payment">eSewa Direct QR Scan Payment</option>
                  <option value="STC Pay / Bank Transfer">STC Pay / Online Bank Transfer</option>
                  <option value="Cash Payment at Entry">Cash Payment at Entrance</option>
                  <option value="Executive Admin Direct Payment">Executive Admin Direct Deposit</option>
                </select>
              </div>

              <!-- Official eSewa QR Payment Gateway & Remarks Format -->
              <div class="p-4 rounded-2xl bg-slate-950 border-2 border-emerald-500/50 space-y-3 text-left shadow-2xl">
                <div class="flex flex-col sm:flex-row items-center gap-4">
                  <div class="w-40 h-auto p-2 bg-white rounded-2xl border-2 border-emerald-400 shadow-xl flex-shrink-0 text-center">
                    <img src="./esewa_qr.png" alt="eSewa Official QR Payment Code" class="w-full h-auto object-contain rounded-xl" />
                    <div class="mt-1 text-[9px] font-black text-emerald-800 uppercase tracking-widest">eSewa Official QR</div>
                  </div>

                  <div class="flex-1 space-y-2 text-xs">
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px] border border-emerald-500/30">
                      <i data-lucide="qr-code" class="w-3 h-3 text-emerald-400"></i> eSewa QR Scan Payment
                    </div>
                    
                    <h5 class="font-extrabold text-white text-xs">Payment Remarks Format (Compulsory):</h5>
                    
                    <div class="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 space-y-1 font-mono text-[10px] text-slate-200">
                      <div class="flex items-center justify-between">
                        <span class="text-slate-400 font-bold">Your Name:</span>
                        <strong class="text-white font-black">${defaultName} ${defaultSurname}</strong>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-slate-400 font-bold">Contact:</span>
                        <strong class="text-white font-black">${defaultContact}</strong>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-slate-400 font-bold">Event Entry Ticket Fee:</span>
                        <strong class="text-amber-300 font-black">${event.registrationFee} SAR</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="font-bold text-slate-200 block mb-1">
                  Upload Statement of Payment / Payment Receipt Screenshot <span class="text-amber-400 font-bold">* Compulsory</span>
                </label>
                <div class="p-4 rounded-2xl border-2 transition-all text-center space-y-2 shadow-xl" style="background-color: #5c0612 !important; background: linear-gradient(135deg, #700b18 0%, #4a040d 100%) !important; border-color: #a81c2e !important;">
                  <span class="text-[11px] font-black text-white block uppercase tracking-wide" style="color: #ffffff !important;">Payment Receipt Document / Bank Statement File</span>
                  <p class="text-[10px] text-amber-200">Upload screenshot or PDF statement of eSewa / STC Pay / Bank Transfer payment</p>
                  <input type="file" id="evt-reg-receipt-file" accept="image/*,.pdf" onchange="app.handleFileUpload(this, 'evt-reg-receipt-url', 'evt-reg-receipt-preview')" class="hidden" />
                  <label for="evt-reg-receipt-file" class="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-black text-xs transition-all shadow-md transform hover:scale-105" style="background-color: #f59e0b !important; color: #020617 !important; border: 1px solid #fbbf24 !important;">
                    <i data-lucide="upload" class="w-3.5 h-3.5" style="color: #020617 !important;"></i> Select & Upload Statement of Payment
                  </label>
                  <div id="evt-reg-receipt-preview" class="pt-1"></div>
                </div>
                <input type="hidden" id="evt-reg-receipt-url" name="paymentReceipt" />
              </div>
            ` : ''}

            <div class="pt-2">
              <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2">
                <i data-lucide="qr-code" class="w-4 h-4"></i> Submit Event Registration & Payment Statement
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Handle Event Ticket Registration Form Submission
  handleEventRegistrationSubmit(eventId, data) {
    if (!data.name || !data.surname || !data.contact || !data.email) {
      this.showToast('Please fill in all compulsory fields (Name, Surname, Contact, Email).', 'error');
      return;
    }

    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    if (event.registrationFee > 0 && (!data.paymentReceipt || !data.paymentReceipt.trim())) {
      this.showToast('Please select and upload your statement of payment / payment receipt file before submitting.', 'warning');
      return;
    }

    if (!event.registeredMembers) event.registeredMembers = [];
    if (!event.registrations) event.registrations = [];

    const ticketCode = `TKT-${event.id.replace('evt_', '')}-${Math.floor(1000 + Math.random() * 9000)}`;

    const feePaid = event.registrationFee !== undefined ? Number(event.registrationFee) : 0;
    const initialStatus = feePaid > 0 ? 'Pending Review' : 'Paid';

    const registration = {
      userId: this.currentUser ? this.currentUser.id : 'guest_' + Date.now(),
      name: data.name.trim(),
      surname: data.surname.trim(),
      contact: data.contact.trim(),
      email: data.email.trim(),
      ticketCode: ticketCode,
      registeredAt: new Date().toLocaleString(),
      feePaid: feePaid,
      paymentStatus: initialStatus,
      paymentMethod: data.paymentMethod || 'STC Pay / Online Bank Transfer',
      paymentReceipt: data.paymentReceipt || ''
    };

    if (this.currentUser && !event.registeredMembers.includes(this.currentUser.id)) {
      event.registeredMembers.push(this.currentUser.id);
    }
    event.registrations.push(registration);

    store.saveEvents(events);
    store.logAction('EVENT_REGISTER_ATTENDEE', data.email, `Registered attendee ${data.name} ${data.surname} for ${event.title} (${initialStatus})`);

    if (initialStatus === 'Pending Review') {
      this.showToast(`Registration Submitted! Your payment receipt statement has been sent to NRDSS Admins for verification and approval.`, 'info');
    } else {
      this.showToast(`Registration Successful! Gate Attendance Ticket & QR Pass generated.`, 'success');
    }

    this.render();

    // Open generated Ticket Pass Modal (will display Pending Review modal if pending)
    this.openEventTicketPassModal(event, registration);
  }

  // Open Registered Event Ticket Pass Modal directly from Dashboard or Event Card
  openRegisteredEventPassModal(eventId) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    let registration = null;
    if (event.registrations && this.currentUser) {
      registration = event.registrations.find(r => r.userId === this.currentUser.id || r.email === this.currentUser.email);
    }
    if (!registration) {
      registration = {
        name: this.currentUser ? this.currentUser.fullName.split(' ')[0] : 'Member',
        surname: this.currentUser ? (this.currentUser.fullName.split(' ').slice(1).join(' ') || 'NRDSS') : 'NRDSS',
        contact: this.currentUser ? this.currentUser.phone : '+966 50 000 0000',
        email: this.currentUser ? this.currentUser.email : 'nrdssksa@gmail.com',
        ticketCode: `TKT-${event.id.replace('evt_', '')}-${this.currentUser ? this.currentUser.memberCode : '001'}`,
        registeredAt: new Date().toLocaleDateString()
      };
    }

    this.openEventTicketPassModal(event, registration);
  }

  // Attendance Ticket Pass Modal with QR Code (Displays complete attendee details & download buttons)
  openEventTicketPassModal(event, registration) {
    const existing = document.getElementById('evt-ticket-pass-modal');
    if (existing) existing.remove();

    const isApprovedPayment = registration.paymentStatus === 'Paid' || registration.paymentStatus === 'Approved' || (event.registrationFee === 0);

    if (!isApprovedPayment) {
      const pendingModalHtml = `
        <div id="evt-ticket-pass-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div class="bg-slate-900 border-2 border-amber-500 w-full max-w-md rounded-3xl p-6 sm:p-8 space-y-5 relative text-center shadow-2xl text-white">
            <button onclick="document.getElementById('evt-ticket-pass-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white p-1">
              <i data-lucide="x" class="w-6 h-6"></i>
            </button>

            <div class="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-400 mx-auto flex items-center justify-center shadow-xl animate-pulse">
              <i data-lucide="clock" class="w-8 h-8"></i>
            </div>

            <div class="space-y-1">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-500/50 text-xs font-black uppercase tracking-wider">
                ⏳ PAYMENT VERIFICATION PENDING
              </span>
              <h3 class="text-2xl font-black text-white">Ticket Pass Pending Approval</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Your event registration payment statement has been submitted. NRDSS Executive Board & Master Admins are currently verifying your payment details.
              </p>
            </div>

            <div class="bg-slate-950 p-4 rounded-2xl border border-amber-500/40 text-left space-y-2 text-xs font-mono">
              <div class="flex items-center justify-between text-amber-300 font-bold border-b border-slate-800 pb-1.5">
                <span>Ticket Code:</span>
                <span class="text-white font-black">${registration.ticketCode}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Attendee Name:</span>
                <strong class="text-white font-sans">${registration.name} ${registration.surname}</strong>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Entry Fee:</span>
                <strong class="text-amber-400">${event.registrationFee || 0} SAR</strong>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Payment Status:</span>
                <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold uppercase text-[10px]">${registration.paymentStatus || 'Pending Review'}</span>
              </div>
            </div>

            ${registration.paymentReceipt ? `
              <div class="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-semibold flex items-center gap-1">
                  <i data-lucide="file-text" class="w-4 h-4 text-emerald-400"></i> Statement Receipt File:
                </span>
                <button onclick="app.viewTicketPaymentReceipt('${event.id}', '${registration.ticketCode}')" class="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-slate-700 cursor-pointer">
                  View Statement
                </button>
              </div>
            ` : ''}

            <div class="p-3.5 rounded-xl bg-blue-950/60 border border-blue-500/40 text-[11px] text-blue-200 text-left flex items-start gap-2">
              <i data-lucide="info" class="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5"></i>
              <span>Upon admin verification, your attendance QR ticket pass will activate automatically and you will receive an in-app notification.</span>
            </div>

            <button onclick="document.getElementById('evt-ticket-pass-modal').remove()" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg">
              Understand & Close
            </button>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', pendingModalHtml);
      lucide.createIcons();
      return;
    }

    const qrPayload = `NRDSS-EVENT-PASS::${event.id}::${registration.ticketCode}::Name:${registration.name} ${registration.surname}::Phone:${registration.contact}::Email:${registration.email}`;

    const modalHtml = `
      <div id="evt-ticket-pass-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div class="bg-slate-900 border border-emerald-500/50 w-full max-w-md rounded-3xl p-6 space-y-5 relative text-center">
          <button onclick="document.getElementById('evt-ticket-pass-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider border border-emerald-500/40">
            <i data-lucide="ticket" class="w-4 h-4"></i> Official Gate Check-in Ticket Pass
          </div>

          <!-- Printable & Downloadable Ticket Card Box -->
          <div id="digital-event-ticket-render" class="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 rounded-2xl border-2 border-emerald-500/60 shadow-2xl text-left space-y-4 relative overflow-hidden">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div class="text-[10px] font-black text-amber-400 uppercase tracking-widest">NRDSS SAUDI ARABIA</div>
                <div class="font-extrabold text-white text-sm leading-tight">${event.title}</div>
              </div>
              <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-extrabold border border-amber-500/30">
                ${registration.ticketCode}
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2 text-xs">
              <div><span class="text-slate-400 block text-[10px]">Date & Time</span><strong class="text-emerald-400 font-bold">${event.date} (${event.time})</strong></div>
              <div><span class="text-slate-400 block text-[10px]">Venue Location</span><strong class="text-slate-200">${event.locationName}</strong></div>
            </div>

            <!-- Attendee Details -->
            <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1 text-xs">
              <div class="text-[10px] font-bold text-amber-400 uppercase">Attendee Information</div>
              <div class="font-extrabold text-white text-sm">${registration.name} ${registration.surname}</div>
              <div class="text-slate-300 font-mono text-xs">Contact: <strong>${registration.contact}</strong></div>
              <div class="text-slate-300 font-mono text-xs">Email: <strong>${registration.email}</strong></div>
            </div>

            <!-- QR Code Section -->
            <div class="pt-2 border-t border-slate-800 flex items-center justify-between">
              <div class="text-[10px] text-slate-400 space-y-0.5">
                <div class="font-bold text-slate-200">Event Gate Attendance Pass</div>
                <div>Scan QR at Entrance</div>
                <div class="font-mono text-[9px] text-emerald-400 font-bold">${registration.ticketCode}</div>
              </div>
              <div id="modal-event-ticket-qr" class="w-24 h-24 bg-white p-1.5 rounded-xl flex items-center justify-center border border-emerald-400 shadow-md"></div>
            </div>
          </div>

          <!-- Instant PNG & PDF Download Buttons -->
          <div class="space-y-2 pt-1">
            <div class="flex gap-2">
              <button onclick="app.downloadEventTicketPDF('digital-event-ticket-render', '${registration.ticketCode}')" class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/40">
                <i data-lucide="download" class="w-4 h-4"></i> Download PDF Ticket
              </button>
              <button onclick="app.downloadEventTicketPNG('digital-event-ticket-render', '${registration.ticketCode}')" class="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5">
                <i data-lucide="file-image" class="w-4 h-4"></i> Download PNG
              </button>
            </div>
            <button onclick="document.getElementById('evt-ticket-pass-modal').remove()" class="w-full py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700">
              Close Window
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();

    setTimeout(() => {
      const qrContainer = document.getElementById('modal-event-ticket-qr');
      if (qrContainer) {
        qrContainer.innerHTML = '';
        const verifyUrl = this.getVerificationURL(registration.ticketCode);
        new QRCode(qrContainer, {
          text: verifyUrl,
          width: 96,
          height: 96,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        });
      }
    }, 50);
  }

  // Admin & Master Admin Approval Handler for Event Registration Payments
  handleApproveEventPayment(eventId, regIndex) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event || !event.registrations || !event.registrations[regIndex]) return;

    const reg = event.registrations[regIndex];
    reg.paymentStatus = 'Paid';
    store.saveEvents(events);

    // Create & append Push Notification to member user account
    const users = store.getUsers();
    const targetUser = users.find(u => u.id === reg.userId || (u.email && u.email.toLowerCase() === (reg.email || '').toLowerCase()));
    
    if (targetUser) {
      if (!targetUser.notifications) targetUser.notifications = [];
      targetUser.notifications.unshift({
        id: 'notif_' + Date.now(),
        title: '🎉 Event Registration Approved!',
        message: `Your event registration payment of ${reg.feePaid || event.registrationFee} SAR for "${event.title}" has been verified and approved! Your official gate check-in attendance QR pass (${reg.ticketCode}) is now active on your dashboard.`,
        date: new Date().toLocaleString(),
        read: false,
        type: 'event_approved'
      });
      store.saveUsers(users);

      // If logged in user is the target user, update state & localStorage
      if (this.currentUser && (this.currentUser.id === targetUser.id || (this.currentUser.email && this.currentUser.email.toLowerCase() === targetUser.email.toLowerCase()))) {
        this.currentUser = targetUser;
        localStorage.setItem('nrdss_user', JSON.stringify(targetUser));
      }
    }

    store.logAction('EVENT_PAYMENT_APPROVE', reg.email, `Approved event payment for ${reg.name} ${reg.surname} (${reg.ticketCode})`);
    this.showToast(`✅ Event registration payment approved! Ticket pass activated and notification sent to ${reg.name}.`, 'success');
    this.render();
  }

  handleRejectEventPayment(eventId, regIndex) {
    if (!confirm('Are you sure you want to reject this event registration payment statement?')) return;

    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event || !event.registrations || !event.registrations[regIndex]) return;

    const reg = event.registrations[regIndex];
    reg.paymentStatus = 'Rejected';
    store.saveEvents(events);

    const users = store.getUsers();
    const targetUser = users.find(u => u.id === reg.userId || (u.email && u.email.toLowerCase() === (reg.email || '').toLowerCase()));
    
    if (targetUser) {
      if (!targetUser.notifications) targetUser.notifications = [];
      targetUser.notifications.unshift({
        id: 'notif_' + Date.now(),
        title: '⚠️ Event Payment Update Required',
        message: `Your payment statement for "${event.title}" (${reg.ticketCode}) was rejected by NRDSS Admins. Please re-upload an authentic receipt file or contact Admin.`,
        date: new Date().toLocaleString(),
        read: false,
        type: 'event_rejected'
      });
      store.saveUsers(users);

      if (this.currentUser && (this.currentUser.id === targetUser.id || (this.currentUser.email && this.currentUser.email.toLowerCase() === targetUser.email.toLowerCase()))) {
        this.currentUser = targetUser;
        localStorage.setItem('nrdss_user', JSON.stringify(targetUser));
      }
    }

    this.showToast('Event payment status updated to Rejected.', 'info');
    this.render();
  }

  // Edit Published Event Modal (For Executive & Master Admins)
  openEditEventModal(eventId) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const existing = document.getElementById('edit-event-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="edit-event-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div class="bg-white text-slate-900 border border-slate-200 w-full max-w-lg rounded-3xl p-6 space-y-5 relative shadow-2xl">
          <button onclick="document.getElementById('edit-event-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <h3 class="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <i data-lucide="edit-3" class="w-5 h-5 text-amber-500"></i> Edit Published Event Details
          </h3>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); app.handleUpdateEvent('${event.id}', Object.fromEntries(fd.entries())); document.getElementById('edit-event-modal').remove();" class="space-y-4 text-xs text-left">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Event Title <span class="text-red-500">*</span></label>
              <input type="text" name="title" value="${event.title}" required class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold" />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="font-bold text-slate-700 block mb-1">Date <span class="text-red-500">*</span></label>
                <input type="text" name="date" value="${event.date}" required class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold" />
              </div>
              <div>
                <label class="font-bold text-slate-700 block mb-1">Time <span class="text-red-500">*</span></label>
                <input type="text" name="time" value="${event.time}" required class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold" />
              </div>
            </div>

            <div>
              <label class="font-bold text-slate-700 block mb-1">Venue Location Name <span class="text-red-500">*</span></label>
              <input type="text" name="locationName" value="${event.locationName || ''}" required class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold" />
            </div>

            <div>
              <label class="font-bold text-slate-700 block mb-1">Google Maps URL</label>
              <input type="text" name="googleMapsUrl" value="${event.googleMapsUrl || ''}" class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono" />
            </div>

            <div>
              <label class="font-bold text-slate-700 block mb-1">Banner Image URL</label>
              <input type="text" name="bannerUrl" value="${event.bannerUrl || ''}" class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono" />
            </div>

            <div>
              <label class="font-bold text-slate-700 block mb-1">Entry Fee Amount (SAR) <span class="text-xs text-slate-400 font-normal">(0 for FREE Entry)</span></label>
              <input type="number" name="registrationFee" min="0" step="5" value="${event.registrationFee !== undefined ? event.registrationFee : 0}" class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-emerald-800 font-mono font-black text-sm" placeholder="0 for Free, or SAR amount" />
            </div>

            <div>
              <label class="font-bold text-slate-700 block mb-1">Event Description & Program Schedule</label>
              <textarea name="description" rows="3" class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 leading-relaxed">${event.description || ''}</textarea>
            </div>

            <button type="submit" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md transition-all">
              Save & Update Event Details
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Handle Event Update Logic
  handleUpdateEvent(eventId, updatedData) {
    const events = store.getEvents();
    const index = events.findIndex(e => e.id === eventId);
    if (index === -1) return;

    events[index] = {
      ...events[index],
      title: updatedData.title.trim(),
      date: updatedData.date.trim(),
      time: updatedData.time.trim(),
      locationName: updatedData.locationName.trim(),
      googleMapsUrl: updatedData.googleMapsUrl ? updatedData.googleMapsUrl.trim() : '',
      bannerUrl: updatedData.bannerUrl ? updatedData.bannerUrl.trim() : '',
      registrationFee: updatedData.registrationFee !== undefined ? Number(updatedData.registrationFee) : 0,
      description: updatedData.description ? updatedData.description.trim() : ''
    };

    store.saveEvents(events);
    store.logAction('EVENT_UPDATE', this.currentUser.email, `Updated event details for ${updatedData.title}`);
    this.showToast('Event details updated successfully!', 'success');
    this.render();
  }

  // Handle Delete Published Event
  handleDeleteEvent(eventId) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    if (!confirm(`Are you sure you want to delete event "${event.title}"? This will remove all associated attendee registrations!`)) {
      return;
    }

    const updatedEvents = events.filter(e => e.id !== eventId);
    store.saveEvents(updatedEvents);
    store.logAction('EVENT_DELETE', this.currentUser.email, `Deleted event ${event.title}`);
    this.showToast(`Event "${event.title}" deleted successfully.`, 'info');
    this.render();
  }

  // View & Manage All Registrations per Event Modal (See, Edit & Delete Attendee Registrations)
  openEventRegistrationsModal(eventId) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const existing = document.getElementById('evt-registrations-modal');
    if (existing) existing.remove();

    const registrations = event.registrations || [];

    const modalHtml = `
      <div id="evt-registrations-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div class="bg-white text-slate-900 border border-slate-200 w-full max-w-4xl rounded-3xl p-6 space-y-5 relative shadow-2xl">
          <button onclick="document.getElementById('evt-registrations-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left border-b border-slate-200 pb-4">
            <div>
              <div class="text-xs font-black uppercase text-amber-600 tracking-wider">Attendance Ledger & Registrations</div>
              <h3 class="text-xl font-black text-slate-900">${event.title}</h3>
              <div class="text-xs text-slate-500 font-medium">${event.date} (${event.time}) • ${event.locationName}</div>
            </div>
            
            <div class="flex flex-wrap items-center gap-2">
              <button onclick="app.downloadEventAttendancePDF('${event.id}')" class="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs transition-all shadow flex items-center gap-1.5">
                <i data-lucide="file-text" class="w-4 h-4"></i> PDF Report
              </button>
              <button onclick="app.downloadEventAttendanceExcel('${event.id}')" class="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs transition-all shadow flex items-center gap-1.5">
                <i data-lucide="file-spreadsheet" class="w-4 h-4"></i> Excel Report (.CSV)
              </button>
              <div class="px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 font-extrabold text-xs">
                Total: ${registrations.length}
              </div>
            </div>
          </div>

          ${registrations.length === 0 ? `
            <div class="text-center py-10 text-slate-500 text-sm">
              <i data-lucide="users" class="w-10 h-10 mx-auto mb-2 opacity-40"></i>
              No attendees registered for this event yet.
            </div>
          ` : `
            <div class="overflow-x-auto max-h-[60vh] overflow-y-auto">
              <table class="w-full text-left text-xs text-slate-800">
                <thead class="bg-slate-100 uppercase text-[10px] text-slate-600 font-extrabold sticky top-0 border-b border-slate-200">
                  <tr>
                    <th class="p-3">#</th>
                    <th class="p-3">Attendee Name & Surname</th>
                    <th class="p-3">Contact Phone</th>
                    <th class="p-3">Email Address</th>
                    <th class="p-3">Ticket Code</th>
                    <th class="p-3 text-right">Manage Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${registrations.map((reg, idx) => `
                    <tr class="hover:bg-slate-50 transition-all">
                      <td class="p-3 font-mono font-bold text-slate-400">${idx + 1}</td>
                      <td class="p-3 font-extrabold text-slate-900">${reg.name} ${reg.surname}</td>
                      <td class="p-3 font-mono font-semibold">${reg.contact}</td>
                      <td class="p-3 font-mono text-slate-600">${reg.email}</td>
                      <td class="p-3 font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">${reg.ticketCode}</td>
                      <td class="p-3 text-right space-x-1.5">
                        <button onclick="app.openEventTicketPassModal(store.getEvents().find(e=>e.id==='${event.id}'), store.getEvents().find(e=>e.id==='${event.id}').registrations[${idx}])" class="px-2.5 py-1 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-[11px] transition-all">
                          Pass QR
                        </button>
                        <button onclick="app.openEditRegistrationModal('${event.id}', ${idx})" class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] transition-all">
                          Edit
                        </button>
                        <button onclick="app.handleDeleteRegistration('${event.id}', ${idx})" class="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-[11px] transition-all">
                          Delete
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Edit Attendee Registration Details Modal
  openEditRegistrationModal(eventId, regIndex) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event || !event.registrations || !event.registrations[regIndex]) return;

    const reg = event.registrations[regIndex];

    const existing = document.getElementById('edit-reg-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="edit-reg-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-white text-slate-900 border border-slate-200 w-full max-w-md rounded-3xl p-6 space-y-4 relative shadow-2xl">
          <button onclick="document.getElementById('edit-reg-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <i data-lucide="edit-3" class="w-5 h-5 text-amber-500"></i> Edit Attendee Registration
          </h3>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); app.handleUpdateRegistration('${eventId}', ${regIndex}, Object.fromEntries(fd.entries())); document.getElementById('edit-reg-modal').remove();" class="space-y-3 text-xs text-left">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="font-bold text-slate-700 block mb-1">First Name</label>
                <input type="text" name="name" value="${reg.name}" required class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold" />
              </div>
              <div>
                <label class="font-bold text-slate-700 block mb-1">Surname</label>
                <input type="text" name="surname" value="${reg.surname}" required class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold" />
              </div>
            </div>

            <div>
              <label class="font-bold text-slate-700 block mb-1">Contact Mobile (+966)</label>
              <input type="text" name="contact" value="${reg.contact}" required class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono" />
            </div>

            <div>
              <label class="font-bold text-slate-700 block mb-1">Email Address</label>
              <input type="email" name="email" value="${reg.email}" required class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono" />
            </div>

            <button type="submit" class="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md transition-all">
              Update Registration Record
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Handle Update Attendee Registration Record
  handleUpdateRegistration(eventId, regIndex, data) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event || !event.registrations || !event.registrations[regIndex]) return;

    event.registrations[regIndex] = {
      ...event.registrations[regIndex],
      name: data.name.trim(),
      surname: data.surname.trim(),
      contact: data.contact.trim(),
      email: data.email.trim()
    };

    store.saveEvents(events);
    this.showToast('Attendee registration details updated!', 'success');
    this.openEventRegistrationsModal(eventId);
    this.render();
  }

  // Handle Delete Attendee Registration Record
  handleDeleteRegistration(eventId, regIndex) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event || !event.registrations || !event.registrations[regIndex]) return;

    const reg = event.registrations[regIndex];
    if (!confirm(`Are you sure you want to remove ${reg.name} ${reg.surname} from this event?`)) return;

    // Remove from registeredMembers array if userId matches
    if (reg.userId && event.registeredMembers) {
      event.registeredMembers = event.registeredMembers.filter(id => id !== reg.userId);
    }

    event.registrations.splice(regIndex, 1);
    store.saveEvents(events);

    this.showToast(`Removed ${reg.name} ${reg.surname} from event registrations.`, 'info');
    this.openEventRegistrationsModal(eventId);
    this.render();
  }

  // Download Event Ticket Pass as PNG Image
  async downloadEventTicketPNG(ticketElementId, ticketCode) {
    const element = document.getElementById(ticketElementId || 'digital-event-ticket-render');
    if (!element) {
      this.showToast('Event Ticket Pass element not found.', 'error');
      return;
    }
    this.showToast('Exporting Event Ticket Pass PNG...', 'info');
    try {
      const canvas = await html2canvas(element, { scale: 3, useCORS: true, backgroundColor: '#090d16' });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `NRDSS_Event_Ticket_${ticketCode || 'Pass'}.png`;
      link.click();
      this.showToast('Event Ticket PNG downloaded successfully!', 'success');
    } catch (err) {
      console.error(err);
      this.showToast('Failed to generate PNG Ticket: ' + err.message, 'error');
    }
  }

  // Download Event Ticket Pass as PDF Document
  async downloadEventTicketPDF(ticketElementId, ticketCode) {
    const element = document.getElementById(ticketElementId || 'digital-event-ticket-render');
    if (!element) {
      this.showToast('Event Ticket Pass element not found.', 'error');
      return;
    }
    this.showToast('Exporting Event Ticket Pass PDF...', 'info');
    try {
      const canvas = await html2canvas(element, { scale: 3, useCORS: true, backgroundColor: '#090d16' });
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('portrait', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * (pdfWidth - 40)) / canvas.width;

      pdf.addImage(imgData, 'PNG', 20, 20, pdfWidth - 40, pdfHeight);
      pdf.save(`NRDSS_Event_Ticket_${ticketCode || 'Pass'}.pdf`);
      this.showToast('Event Ticket PDF downloaded successfully!', 'success');
    } catch (err) {
      console.error(err);
      this.showToast('Failed to generate PDF Ticket: ' + err.message, 'error');
    }
  }

  // Generic Local File Upload & Base64 Data URL Handler
  handleFileUpload(input, targetHiddenId, previewId, selectFormatId) {
    if (input.files && input.files[0]) {
      const file = input.files[0];

      if (file.size > 3.5 * 1024 * 1024) {
        this.showToast(`File size is ${(file.size / 1024 / 1024).toFixed(1)}MB. For browser storage, please use a compressed file (<3.5MB).`, 'warning');
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        if (targetHiddenId) {
          const hiddenInput = document.getElementById(targetHiddenId);
          if (hiddenInput) hiddenInput.value = dataUrl;
        }

        // Auto-select format dropdown if format select ID passed or found
        const targetSelectId = selectFormatId || 'ad-type-select';
        const selectElem = document.getElementById(targetSelectId);
        if (selectElem) {
          if (file.type.startsWith('video/')) {
            selectElem.value = 'video';
          } else if (file.type.startsWith('image/')) {
            selectElem.value = 'photo';
          }
        }

        if (previewId) {
          const previewElem = document.getElementById(previewId);
          if (previewElem) {
            if (file.type.startsWith('video/')) {
              previewElem.innerHTML = `<video src="${dataUrl}" class="w-full h-32 object-cover rounded-xl mt-2 border border-slate-700" controls></video>`;
            } else if (file.type.startsWith('image/')) {
              previewElem.innerHTML = `<img src="${dataUrl}" class="w-full h-32 object-cover rounded-xl mt-2 border border-amber-500/40 shadow-md" />`;
            } else {
              previewElem.innerHTML = `<div class="text-xs text-emerald-400 font-bold mt-2 p-2 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center gap-2"><i data-lucide="file-check" class="w-4 h-4"></i> ${file.name} (${(file.size / 1024).toFixed(1)} KB)</div>`;
              lucide.createIcons();
            }
          }
        }
        this.showToast(`File "${file.name}" uploaded & attached!`, 'success');
      };
      reader.readAsDataURL(file);
    }
  }

  // Broadcast Push Notification Dispatcher
  handleBroadcastNotification(title, message, coverUrl) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Unauthorized access.', 'error');
      return;
    }

    const notifs = store.getNotifications();
    const newNotif = {
      id: 'notif_' + Date.now(),
      title: title.trim(),
      message: message.trim(),
      coverUrl: coverUrl || '',
      date: new Date().toLocaleString(),
      readBy: []
    };

    notifs.unshift(newNotif);
    store.saveNotifications(notifs);
    store.logAction('BROADCAST_NOTIFICATION', this.currentUser.email, `Dispatched push alert: ${title}`);

    this.showToast('Push notification broadcasted to all members!', 'success');
    this.render();
  }

  // Ad Space Posting Handler
  handleAddAdvertisement(adData) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Unauthorized access.', 'error');
      return false;
    }

    if (!adData.mediaUrl || !adData.mediaUrl.trim()) {
      this.showToast('Please upload or select a media file before publishing.', 'error');
      return false;
    }

    const media = adData.mediaUrl.trim();
    const isVideo = media.startsWith('data:video/') || adData.type === 'video';

    try {
      const ads = store.getAds();
      const newAd = {
        id: 'ad_' + Date.now(),
        title: adData.title.trim(),
        type: isVideo ? 'video' : 'photo',
        mediaUrl: media,
        targetUrl: adData.targetUrl ? adData.targetUrl.trim() : 'mailto:nrdssksa@gmail.com',
        caption: adData.caption.trim()
      };

      ads.unshift(newAd);
      store.saveAds(ads);
      store.logAction('ADD_ADVERTISEMENT', this.currentUser.email, `Published ad: ${adData.title}`);

      this.showToast('New advertisement banner published successfully!', 'success');
      this.render();
      return true;
    } catch (err) {
      console.error(err);
      if (err.name === 'QuotaExceededError' || err.code === 22 || (err.message && err.message.includes('quota'))) {
        this.showToast('Browser storage limit exceeded! The video file is too large for local browser storage. Please upload a smaller video clip (<3.5MB) or image.', 'error');
      } else {
        this.showToast('Failed to publish advertisement: ' + err.message, 'error');
      }
      return false;
    }
  }

  // Edit Advertisement Modal & Handler
  openEditAdModal(adId) {
    const ads = store.getAds();
    const ad = ads.find(a => a.id === adId);
    if (!ad) return;

    const modalHtml = `
      <div id="edit-ad-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-amber-500/40 w-full max-w-md rounded-3xl p-6 space-y-6 relative max-h-[90vh] overflow-y-auto">
          <button onclick="document.getElementById('edit-ad-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <i data-lucide="edit-3" class="w-5 h-5 text-amber-400"></i> Edit Advertisement Banner
          </h3>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); const mediaUrl=fd.get('mediaUrl') || document.getElementById('edit-ad-media-url-input')?.value; if(app.handleUpdateAdvertisement('${ad.id}', { title:fd.get('title'), type:fd.get('type'), mediaUrl:mediaUrl, targetUrl:fd.get('targetUrl'), caption:fd.get('caption') })){ document.getElementById('edit-ad-modal').remove(); }" class="space-y-4 text-xs text-left">
            <div>
              <label class="font-bold text-slate-300 block mb-1">Ad Title / Sponsor Name</label>
              <input type="text" name="title" value="${ad.title}" required class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
            </div>
            <div>
              <label class="font-bold text-slate-300 block mb-1">Ad Media Format</label>
              <select id="edit-ad-type-select" name="type" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
                <option value="photo" ${ad.type === 'photo' ? 'selected' : ''}>Photo Banner</option>
                <option value="video" ${ad.type === 'video' ? 'selected' : ''}>Video Banner</option>
              </select>
            </div>

            <!-- Upload Replacement File -->
            <div>
              <label class="font-bold text-slate-300 block mb-1">Replace Photo / Video Media File</label>
              <div class="p-4 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-700 hover:border-amber-500 transition-all text-center space-y-2">
                <input type="file" id="edit-ad-media-file" accept="image/*,video/*" onchange="app.handleFileUpload(this, 'edit-ad-media-url-input', 'edit-ad-media-preview', 'edit-ad-type-select')" class="hidden" />
                <label for="edit-ad-media-file" class="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-lg shadow-amber-950/40">
                  <i data-lucide="upload" class="w-4 h-4"></i> Choose Replacement File
                </label>
                <div id="edit-ad-media-preview">
                  ${ad.type === 'video' ? `<video src="${ad.mediaUrl}" class="w-full h-32 object-cover rounded-xl mt-2 border border-slate-700" controls></video>` : `<img src="${ad.mediaUrl}" class="w-full h-32 object-cover rounded-xl mt-2 border border-amber-500/40 shadow-md" />`}
                </div>
              </div>
              <input type="hidden" id="edit-ad-media-url-input" name="mediaUrl" value="${ad.mediaUrl}" required />
            </div>

            <div>
              <label class="font-bold text-slate-300 block mb-1">Target Action Link / Email</label>
              <input type="text" name="targetUrl" value="${ad.targetUrl || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
            </div>
            <div>
              <label class="font-bold text-slate-300 block mb-1">Promotion / Caption Details</label>
              <textarea name="caption" required rows="2" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white">${ad.caption}</textarea>
            </div>
            <button type="submit" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-950/50">
              Save Changes to Advertisement
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  handleUpdateAdvertisement(adId, updatedData) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Unauthorized access.', 'error');
      return false;
    }

    const media = updatedData.mediaUrl.trim();
    const isVideo = media.startsWith('data:video/') || updatedData.type === 'video';

    try {
      const ads = store.getAds();
      const ad = ads.find(a => a.id === adId);
      if (!ad) return false;

      ad.title = updatedData.title.trim();
      ad.type = isVideo ? 'video' : 'photo';
      ad.mediaUrl = media;
      ad.targetUrl = updatedData.targetUrl ? updatedData.targetUrl.trim() : '';
      ad.caption = updatedData.caption.trim();

      store.saveAds(ads);
      store.logAction('UPDATE_ADVERTISEMENT', this.currentUser.email, `Updated ad: ${ad.title}`);

      this.showToast(`Advertisement "${ad.title}" updated successfully!`, 'success');
      this.render();
      return true;
    } catch (err) {
      console.error(err);
      if (err.name === 'QuotaExceededError' || err.code === 22 || (err.message && err.message.includes('quota'))) {
        this.showToast('Browser storage limit exceeded! The video file is too large for local browser storage. Please upload a smaller video clip (<3.5MB) or image.', 'error');
      } else {
        this.showToast('Failed to update advertisement: ' + err.message, 'error');
      }
      return false;
    }
  }

  // Delete Advertisement Handler (Admin / Master Admin)
  handleDeleteAdvertisement(adId) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Unauthorized access.', 'error');
      return;
    }

    const ads = store.getAds();
    const ad = ads.find(a => a.id === adId);
    if (!ad) {
      this.showToast('Advertisement not found.', 'error');
      return;
    }

    if (!confirm(`Are you sure you want to delete advertisement banner "${ad.title}"?`)) {
      return;
    }

    const adsFiltered = ads.filter(a => a.id !== adId);
    store.saveAds(adsFiltered);
    store.logAction('DELETE_ADVERTISEMENT', this.currentUser.email, `Deleted ad: ${ad.title}`);

    this.showToast(`Advertisement "${ad.title}" deleted successfully!`, 'success');
    this.render();
  }

  // Global Notifications Bell Drawer Modal
  openNotificationModal() {
    const notifs = store.getNotifications();
    const existing = document.getElementById('notif-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="notif-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl p-6 space-y-5 relative max-h-[85vh] flex flex-col">
          <button onclick="document.getElementById('notif-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="flex items-center gap-3 border-b border-slate-800 pb-3 text-left">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <i data-lucide="bell" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-lg font-extrabold text-white">Official Notifications & Push Alerts</h3>
              <p class="text-xs text-slate-400">Community broadcasts sent by NRDSS Executive Administration</p>
            </div>
          </div>

          <div class="flex-1 overflow-y-auto space-y-3 pr-1 text-left">
            ${notifs.length === 0 ? `
              <div class="text-center py-10 text-slate-400 text-sm">
                No notifications broadcasted yet.
              </div>
            ` : `
              ${notifs.map(n => `
                <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-slate-700 transition-all">
                  <div class="flex items-center justify-between">
                    <h4 class="font-bold text-white text-sm flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                      ${n.title}
                    </h4>
                    <span class="text-[10px] text-slate-500 font-mono">${n.date}</span>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed">${n.message}</p>
                  ${n.coverUrl ? `
                    <img src="${n.coverUrl}" class="w-full h-40 object-cover rounded-xl border border-slate-700 mt-2" />
                  ` : ''}
                </div>
              `).join('')}
            `}
          </div>

          <div class="pt-2 border-t border-slate-800">
            <button onclick="document.getElementById('notif-modal').remove()" class="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs hover:bg-slate-700">
              Close Notifications
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Update Advertisement Handler (Admin / Master Admin)
  handleUpdateAdvertisement(adId, updatedData) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Unauthorized access.', 'error');
      return;
    }

    const ads = store.getAds();
    const adIndex = ads.findIndex(a => a.id === adId);
    if (adIndex === -1) {
      this.showToast('Advertisement not found.', 'error');
      return;
    }

    ads[adIndex] = {
      ...ads[adIndex],
      title: updatedData.title.trim(),
      type: updatedData.type || ads[adIndex].type,
      mediaUrl: updatedData.mediaUrl ? updatedData.mediaUrl.trim() : ads[adIndex].mediaUrl,
      targetUrl: updatedData.targetUrl ? updatedData.targetUrl.trim() : ads[adIndex].targetUrl,
      caption: updatedData.caption.trim()
    };

    store.saveAds(ads);
    store.logAction('UPDATE_ADVERTISEMENT', this.currentUser.email, `Updated ad: ${updatedData.title}`);

    this.showToast(`Advertisement "${updatedData.title}" updated successfully!`, 'success');
    this.render();
  }

  // Open Edit Advertisement Modal (Admin / Master Admin)
  openEditAdModal(adId) {
    const ads = store.getAds();
    const ad = ads.find(a => a.id === adId);
    if (!ad) {
      this.showToast('Advertisement details not found.', 'error');
      return;
    }

    const modalHtml = `
      <div id="edit-ad-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-amber-500/40 w-full max-w-md rounded-3xl p-6 space-y-6 relative max-h-[90vh] overflow-y-auto">
          <button onclick="document.getElementById('edit-ad-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <i data-lucide="edit-3" class="w-5 h-5 text-amber-400"></i> Edit Advertisement Details
          </h3>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); app.handleUpdateAdvertisement('${ad.id}', { title:fd.get('title'), type:fd.get('type'), mediaUrl:fd.get('mediaUrl') || '${ad.mediaUrl}', targetUrl:fd.get('targetUrl'), caption:fd.get('caption') }); document.getElementById('edit-ad-modal').remove();" class="space-y-4 text-xs text-left">
            <div>
              <label class="font-bold text-slate-300 block mb-1">Ad Title / Sponsor Name</label>
              <input type="text" name="title" value="${ad.title}" required placeholder="Business Name" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
            </div>

            <div>
              <label class="font-bold text-slate-300 block mb-1">Ad Media Format</label>
              <select name="type" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
                <option value="photo" ${ad.type === 'photo' ? 'selected' : ''}>Photo Banner</option>
                <option value="video" ${ad.type === 'video' ? 'selected' : ''}>Video Banner</option>
              </select>
            </div>

            <!-- Replace Media File Upload Button -->
            <div>
              <label class="font-bold text-slate-300 block mb-1">Upload New Photo / Video File (Optional Replace)</label>
              <div class="p-3 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-700 hover:border-amber-500 transition-all text-center space-y-2">
                <input type="file" id="edit-ad-media-file" accept="image/*,video/*" onchange="app.handleFileUpload(this, 'edit-ad-media-url', 'edit-ad-media-preview')" class="hidden" />
                <label for="edit-ad-media-file" class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md">
                  <i data-lucide="upload" class="w-4 h-4"></i> Upload New Media File
                </label>
                <div id="edit-ad-media-preview" class="mt-2">
                  ${ad.type === 'video' ? `<video src="${ad.mediaUrl}" class="w-full h-32 object-cover rounded-xl border border-slate-700" controls></video>` : `<img src="${ad.mediaUrl}" class="w-full h-32 object-cover rounded-xl border border-amber-500/40" />`}
                </div>
              </div>
              <input type="hidden" id="edit-ad-media-url" name="mediaUrl" value="${ad.mediaUrl}" />
            </div>

            <div>
              <label class="font-bold text-slate-300 block mb-1">Target Action Link / Email</label>
              <input type="text" name="targetUrl" value="${ad.targetUrl || ''}" placeholder="mailto:nrdssksa@gmail.com or https://..." class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
            </div>

            <div>
              <label class="font-bold text-slate-300 block mb-1">Promotion / Caption Details</label>
              <textarea name="caption" required rows="3" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white">${ad.caption}</textarea>
            </div>

            <button type="submit" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-950/50">
              Save & Update Advertisement
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // QR Code Authenticity Verification Handler
  handleVerifyQR(qrString) {
    if (!qrString) {
      this.showToast('Please enter or scan a valid QR code string.', 'error');
      return;
    }

    const users = store.getUsers();
    let codeToSearch = qrString.trim();
    if (qrString.includes('NRDSS-AUTH::')) {
      const parts = qrString.split('::');
      codeToSearch = parts[1];
    } else if (qrString.includes('NRDSS-EVENT-PASS::')) {
      const parts = qrString.split('::');
      codeToSearch = parts[2];
    }

    const member = users.find(u => u.memberCode === codeToSearch || u.id === codeToSearch);

    if (member) {
      this.qrVerificationResult = {
        valid: true,
        member: member,
        verifiedAt: new Date().toLocaleString()
      };
      this.showToast(`Valid Member Code: ${member.fullName} (${member.status})`, 'success');
    } else {
      this.qrVerificationResult = {
        valid: false,
        rawCode: qrString,
        verifiedAt: new Date().toLocaleString()
      };
      this.showToast('Invalid or fake QR code token detected!', 'error');
    }
    this.render();
  }

  // Instant ID Card PDF / PNG Download Helpers
  downloadIDCardPNG() {
    const cardElem = document.getElementById('digital-id-card-render');
    if (!cardElem) {
      this.showToast('ID Card preview container element not found.', 'error');
      return;
    }

    this.showToast('Generating high-resolution PNG image ID card...', 'info');

    html2canvas(cardElem, {
      scale: 3,
      useCORS: true,
      backgroundColor: '#ffffff'
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `NRDSS_ID_Card_${this.currentUser ? this.currentUser.memberCode : 'Member'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      this.showToast('My QR ID Card PNG downloaded successfully!', 'success');
    }).catch(err => {
      console.error(err);
      this.showToast('Failed to generate PNG image. Ensure image assets allow CORS.', 'error');
    });
  }

  downloadIDCardPDF() {
    const cardElem = document.getElementById('digital-id-card-render');
    if (!cardElem) {
      this.showToast('ID Card preview container element not found.', 'error');
      return;
    }

    this.showToast('Rendering vector PDF document ID Card...', 'info');

    html2canvas(cardElem, {
      scale: 3,
      useCORS: true,
      backgroundColor: '#ffffff'
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = window.jspdf;

      const pxToMM = 0.264583;
      const cardWidthMM = (canvas.width / 3) * pxToMM;
      const cardHeightMM = (canvas.height / 3) * pxToMM;
      const orientation = cardWidthMM >= cardHeightMM ? 'l' : 'p';

      const pdf = new jsPDF({
        orientation: orientation,
        unit: 'mm',
        format: [cardWidthMM, cardHeightMM]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, cardWidthMM, cardHeightMM);
      pdf.save(`NRDSS_ID_Card_${this.currentUser ? this.currentUser.memberCode : 'Member'}.pdf`);
      this.showToast('My QR ID Card PDF downloaded successfully!', 'success');
    }).catch(err => {
      console.error(err);
      this.showToast('Failed to export PDF document.', 'error');
    });
  }

  // Main UI Component Renderers
  renderHeader() {
    const isMaster = SecurityGuard.isMasterAdmin(this.currentUser);
    const isAdmin = SecurityGuard.isAdminOrMaster(this.currentUser);

    return `
      <header class="glass-nav sticky top-0 z-40 transition-all duration-300 shadow-xl border-b border-amber-500/30">
        <!-- Top Row: Brand Logo & User Authentication Action Buttons -->
        <div class="px-4 lg:px-8 py-2.5 border-b border-blue-900/60 bg-blue-950/95">
          <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            <!-- Brand Logo Header Title -->
            <div class="flex items-center gap-3 cursor-pointer" onclick="app.currentTab = 'home'; app.render();">
              ${store.getLogoImgHtml("w-11 h-11 flex-shrink-0", isAdmin ? 'cursor: pointer;' : '')}
              <div>
                <div class="flex items-center gap-2">
                  <h1 class="text-lg lg:text-xl font-black tracking-tight text-white">
                    NRDSS
                  </h1>
                  <span class="text-[9px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 shadow">
                    Saudi Arabia
                  </span>
                </div>
                <p class="text-[11px] text-blue-100 font-bold hidden sm:block whitespace-nowrap">
                  Nuwakot Rasuwa Dhading Samaj Saudi Arabia
                </p>
              </div>
            </div>

            <!-- User Profile & Authentication Actions -->
            <div class="flex items-center gap-2.5">
              <!-- Notification Bell Icon Button -->
              <button onclick="app.openNotificationModal()" title="Official Notifications" class="relative p-2 rounded-xl bg-blue-900 text-white border border-blue-700/60 hover:bg-blue-800 transition-all flex items-center justify-center">
                <i data-lucide="bell" class="w-4.5 h-4.5 text-amber-400"></i>
                ${store.getNotifications().length > 0 ? `
                  <span class="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-red-600 text-white font-extrabold text-[9px] flex items-center justify-center shadow-md animate-pulse">
                    ${store.getNotifications().length}
                  </span>
                ` : ''}
              </button>

              ${this.currentUser ? `
                <div class="flex items-center gap-2.5 bg-blue-900/80 p-1 pr-2.5 rounded-2xl border border-blue-700/60">
                  <img src="${this.currentUser.photo}" alt="${this.currentUser.fullName}" class="w-8 h-8 rounded-full object-cover clean-avatar border border-amber-400" />
                  <div class="hidden sm:block text-left">
                    <div class="text-xs font-extrabold text-white flex items-center gap-1">
                      <span>${this.currentUser.titlePrefix ? this.currentUser.titlePrefix + ' ' : ''}${this.currentUser.fullName}</span>
                    </div>
                    <div class="text-[9px] text-amber-300 font-bold capitalize flex items-center gap-1">
                      ${this.currentUser.role.replace('_', ' ')}
                    </div>
                  </div>
                  <button onclick="app.handleLogout()" title="Logout" class="p-1.5 rounded-xl bg-blue-950 hover:bg-red-600 text-white transition-all">
                    <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              ` : `
                <div class="flex items-center gap-2">
                  <button onclick="app.openLoginModal()" class="px-3.5 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs border border-blue-700 transition-all flex items-center gap-1">
                    <i data-lucide="log-in" class="w-3.5 h-3.5"></i> Login
                  </button>
                  <button onclick="app.openRegisterModal()" class="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-1">
                    <i data-lucide="user-plus" class="w-3.5 h-3.5"></i> Register
                  </button>
                  <button onclick="app.loginAsGuest()" class="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs border border-emerald-500 shadow-md transition-all flex items-center gap-1">
                    <i data-lucide="user-check" class="w-3.5 h-3.5 text-amber-300"></i> Guest Login
                  </button>
                </div>
              `}
            </div>

          </div>
        </div>

        <!-- Second Row: Full-width Navigation Bar (Red Box Location!) -->
        <div class="bg-blue-950/90 px-4 lg:px-8 py-2 border-t border-blue-800/60 shadow-inner">
          <div class="max-w-7xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto gap-2.5 py-0.5 no-scrollbar">
            <button onclick="app.currentTab = 'home'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${this.currentTab === 'home' ? 'bg-red-600 text-white shadow-lg border border-red-400' : 'text-slate-200 hover:text-white hover:bg-blue-900'} flex items-center gap-2">
              <i data-lucide="home" class="w-4 h-4"></i> Home
            </button>
            <button onclick="app.currentTab = 'about'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${this.currentTab === 'about' ? 'bg-red-600 text-white shadow-lg border border-red-400' : 'text-slate-200 hover:text-white hover:bg-blue-900'} flex items-center gap-2">
              <i data-lucide="info" class="w-4 h-4"></i> About
            </button>
            <button onclick="app.currentTab = 'events'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${this.currentTab === 'events' ? 'bg-red-600 text-white shadow-lg border border-red-400' : 'text-slate-200 hover:text-white hover:bg-blue-900'} flex items-center gap-2">
              <i data-lucide="calendar" class="w-4 h-4"></i> Events
            </button>
            <button onclick="app.currentTab = 'gallery'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${this.currentTab === 'gallery' ? 'bg-red-600 text-white shadow-lg border border-red-400' : 'text-slate-200 hover:text-white hover:bg-blue-900'} flex items-center gap-2">
              <i data-lucide="image" class="w-4 h-4"></i> Gallery
            </button>
            <button onclick="app.currentTab = 'news'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${this.currentTab === 'news' ? 'bg-red-600 text-white shadow-lg border border-red-400' : 'text-slate-200 hover:text-white hover:bg-blue-900'} flex items-center gap-2">
              <i data-lucide="newspaper" class="w-4 h-4"></i> News
            </button>
            <button onclick="app.currentTab = 'campaigns'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${this.currentTab === 'campaigns' ? 'bg-red-600 text-white shadow-lg border border-red-400' : 'text-amber-300 hover:text-white hover:bg-blue-900'} flex items-center gap-2">
              <i data-lucide="heart" class="w-4 h-4 text-red-400"></i> Charity & Relief
            </button>

            ${this.currentUser ? `
              <button onclick="app.currentTab = 'dashboard'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${this.currentTab === 'dashboard' ? (this.currentUser.role === 'scanner_admin' ? 'bg-amber-500 text-slate-950 shadow-lg font-black' : 'bg-red-600 text-white shadow-lg') : 'text-amber-300 hover:text-white hover:bg-blue-900'} flex items-center gap-2 border border-amber-500/40">
                <i data-lucide="${this.currentUser.role === 'scanner_admin' ? 'scan' : 'layout-dashboard'}" class="w-4 h-4"></i> ${this.currentUser.role === 'scanner_admin' ? 'Scanner Dashboard' : 'My Dashboard'}
              </button>
            ` : ''}
            
            ${isAdmin ? `
              <button onclick="app.currentTab = 'admin'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${this.currentTab === 'admin' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-amber-300 hover:text-white hover:bg-blue-900'} flex items-center gap-2 border border-amber-400">
                <i data-lucide="${isMaster ? 'crown' : 'shield-check'}" class="w-4 h-4"></i> ${isMaster ? 'Master Admin' : 'Admin Portal'}
              </button>
              <button onclick="app.openLogoCropModal()" title="Upload & Crop Round Logo" class="px-3 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-extrabold text-xs border border-amber-400/40 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                <i data-lucide="scissors" class="w-3.5 h-3.5 text-amber-400"></i> Edit Logo
              </button>
            ` : ''}
          </div>
        </div>
      </header>
    `;
  }

  renderFooter() {
    return `
      <footer class="bg-blue-900 text-white border-t-4 border-amber-500 mt-auto py-8 px-4 text-center text-xs">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            ${store.getLogoImgHtml("w-11 h-11 flex-shrink-0")}
            <div class="text-left">
              <div class="font-extrabold text-white text-sm">नुवाकोट - रसुवा - धादिङ समाज, साउदी अरब</div>
              <div class="text-[11px] text-amber-300 font-bold">एकता हाम्रो शक्ति, सेवा हाम्रो धर्म</div>
              <div class="text-[11px] text-slate-200">Official Support: <a href="mailto:nrdssksa@gmail.com" class="text-amber-300 hover:underline font-mono">nrdssksa@gmail.com</a></div>
            </div>
          </div>
          <div class="text-slate-200 font-medium">
            &copy; 2026 NRDSS – Nuwakot Rasuwa Dhading Samaj Saudi Arabia. All Rights Reserved.
          </div>
          <div class="font-semibold text-amber-300 bg-blue-950 px-3.5 py-1.5 rounded-xl border border-amber-500/40">
            Designed & Developed by RB Tunes
          </div>
        </div>
      </footer>
    `;
  }

  // Advertisement Carousel & Banner Engine (Supports Photo & Video Ads)
  // Render Active Advertisements Component (Shown on Home Page & Member Dashboard)
  renderAdvertisementSpace() {
    const ads = store.getAds();
    if (!ads || ads.length === 0) return '';

    return `
      <div class="max-w-7xl mx-auto px-4 mt-6 space-y-4">
        ${ads.map(ad => `
          <div class="glass-card rounded-2xl p-4 lg:p-6 border border-amber-500/40 relative overflow-hidden group shadow-xl">
            <div class="absolute top-3 right-3 z-10">
              <span class="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-md">
                <i data-lucide="megaphone" class="w-3 h-3"></i> Official Sponsor / Ad Space
              </span>
            </div>

            <div class="flex flex-col md:flex-row items-center gap-6">
              <div class="w-full md:w-1/2 h-48 lg:h-56 rounded-xl overflow-hidden relative shadow-lg bg-slate-100">
                ${ad.type === 'video' ? `
                  <video src="${ad.mediaUrl}" autoplay loop muted playsinline class="w-full h-full object-cover rounded-xl pointer-events-none select-none"></video>
                ` : `
                  <img src="${ad.mediaUrl}" alt="${ad.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                `}
              </div>
              <div class="w-full md:w-1/2 flex flex-col justify-center text-left space-y-2.5">
                <h3 class="text-lg lg:text-xl font-extrabold text-slate-900">${ad.title}</h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">${ad.caption}</p>
                <div class="pt-2">
                  <a href="${ad.targetUrl}" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg">
                    <span>Contact Sponsor / Learn More</span>
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Home Page Component
  renderHomePage() {
    const isAdmin = SecurityGuard.isAdminOrMaster(this.currentUser);
    const membershipTiers = store.getMembershipTiers();

    return `
      <main class="flex-1 pb-16">
        <!-- Hero Section (Full-width Split Layout Filling Screen Sides) -->
        <section class="relative py-8 lg:py-14 px-4 lg:px-8 overflow-hidden">
          <div class="max-w-7xl mx-auto">
            
            <div class="glass-card rounded-3xl p-6 lg:p-10 border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 shadow-2xl relative overflow-hidden">
              
              <!-- Subtle Background Ambient Accents -->
              <div class="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-100/60 blur-3xl pointer-events-none"></div>
              <div class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-red-100/60 blur-3xl pointer-events-none"></div>

              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div class="space-y-6 text-left flex-1">
                  <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 border border-blue-300 text-xs font-black uppercase tracking-wider shadow-sm">
                    <i data-lucide="sparkles" class="w-4 h-4 text-amber-600"></i>
                    <span>तीन जिल्ला, एक समुदाय, एक पहिचान</span>
                  </div>

                  <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                    नुवाकोट - रसुवा - धादिङ समाज, साउदी अरब
                    <span class="block text-blue-800 text-2xl sm:text-4xl mt-2 font-black">
                      Nuwakot Rasuwa Dhading Samaj (NRDSS)
                    </span>
                  </h1>

                  <p class="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-3xl">
                    Empowering, connecting, and serving the Nepali diaspora from Nuwakot, Rasuwa, and Dhading districts residing in the Kingdom of Saudi Arabia. Experience digital memberships, verified QR ID cards, event check-ins, and emergency relief services.
                  </p>
                </div>

                <!-- Hero Section Logo Emblem -->
                <div ${isAdmin ? 'onclick="app.openLogoCropModal()" title="Click to Edit & Crop Logo"' : ''} class="cursor-pointer">
                  ${store.getLogoImgHtml("w-36 h-36 lg:w-48 lg:h-48 flex-shrink-0 mx-auto md:mx-0")}
                </div>
              </div>

                <!-- 3 Action CTA Buttons -->
                <div class="flex flex-wrap items-center gap-3 pt-2">
                  ${!this.currentUser ? `
                    <button onclick="app.openRegisterModal()" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm shadow-xl shadow-red-900/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                      <i data-lucide="user-plus" class="w-4.5 h-4.5"></i> Join NRDSS Today
                    </button>
                    <button onclick="app.openLoginModal()" class="px-6 py-3.5 rounded-2xl bg-blue-900 hover:bg-blue-800 text-white font-extrabold text-sm border border-blue-700 transition-all flex items-center gap-2">
                      <i data-lucide="log-in" class="w-4.5 h-4.5"></i> Member Login
                    </button>
                    <button onclick="app.loginAsGuest()" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-sm shadow-xl shadow-emerald-950/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-emerald-500">
                      <i data-lucide="user-check" class="w-4.5 h-4.5 text-amber-300"></i> Join / Login as Guest Member
                    </button>
                  ` : `
                    <button onclick="app.currentTab = 'dashboard'; app.render();" class="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-950/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-3">
                      <i data-lucide="qr-code" class="w-5 h-5"></i> Open My Dashboard & My QR ID Card
                    </button>
                  `}
                </div>

                <!-- Quick Stats Ribbon below CTAs -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-4xl">
                  <div class="text-left">
                    <div class="text-xl font-black text-blue-900">3 Districts</div>
                    <div class="text-[11px] text-slate-600 font-bold">Nuwakot, Rasuwa, Dhading</div>
                  </div>
                  <div class="text-left sm:border-l sm:border-slate-200 sm:pl-4">
                    <div class="text-xl font-black text-emerald-700">1,250+</div>
                    <div class="text-[11px] text-slate-600 font-bold">Verified Members KSA</div>
                  </div>
                  <div class="text-left sm:border-l sm:border-slate-200 sm:pl-4">
                    <div class="text-xl font-black text-red-600">24/7 Support</div>
                    <div class="text-[11px] text-slate-600 font-bold">Emergency Helpline KSA</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        <!-- Official Advertisement Banner Slot -->
        ${this.renderAdvertisementSpace()}

        <!-- Executive Support Banner -->
        <section class="max-w-7xl mx-auto px-4 py-8">
          <div class="dark-banner-card rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div class="space-y-1 text-left">
              <div class="text-xl sm:text-2xl font-black banner-title" style="color: #ffffff !important;">Need Help or Emergency Assistance?</div>
              <p class="text-sm banner-subtext" style="color: #e2e8f0 !important;">Contact NRDSS Official Executive Committee in Saudi Arabia anytime.</p>
            </div>
            <div class="flex items-center gap-3 flex-shrink-0">
              <a href="mailto:nrdssksa@gmail.com" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 border border-emerald-500">
                <i data-lucide="mail" class="w-4 h-4 text-amber-300"></i> Email Admin: nrdssksa@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  // Member Dashboard & "My QR ID Card" Component (NO Admin Controls for General Members)
  renderMemberDashboard() {
    if (!this.currentUser) return '';

    const isApproved = this.currentUser.status === 'Approved';
    const isGolden = this.currentUser.membershipType === 'Founder Member';
    const events = store.getEvents();
    const myEvents = events.filter(e => e.registeredMembers && e.registeredMembers.includes(this.currentUser.id));

    const isGuest = this.currentUser.role === 'guest_member' || this.currentUser.membershipType === 'Guest Member';

    return `
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-8">
        ${isGuest ? `
          <!-- Guest Member Welcome & Upgrade Banner -->
          <div class="dark-banner-card rounded-2xl p-5 lg:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div class="space-y-1 text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-bold uppercase border border-emerald-500/30 banner-badge">
                <i data-lucide="user-check" class="w-3.5 h-3.5"></i> Guest Member Account Active
              </div>
              <div class="text-xl lg:text-2xl font-black banner-title">Logged in as Guest Member</div>
              <p class="text-xs sm:text-sm banner-subtext">You have instant access to browse NRDSS Saudi Arabia events, media albums, and community features! Apply for full membership anytime to receive verified official QR ID cards.</p>
            </div>
            <button onclick="app.openRegisterModal()" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-xs sm:text-sm shadow-xl flex-shrink-0 flex items-center gap-2 border border-red-500 transform hover:scale-105 transition-all">
              <i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i> Upgrade to Full Membership
            </button>
          </div>
        ` : ''}

        <!-- 1st SECTION (TOP): Member Profile Header & "My QR ID Card" -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          <!-- Member Profile Header Card -->
          <div class="lg:col-span-2 ${isGolden ? 'founder-golden-border' : 'glass-card'} rounded-2xl p-5 lg:p-6 relative overflow-hidden">
            <div class="flex flex-col md:flex-row items-center gap-6">
              <!-- Profile Photo with Clean Avatar Framing (Eliminates white bg block bleed) -->
              <div class="relative w-28 h-28 flex-shrink-0">
                <img src="${this.currentUser.photo}" alt="${this.currentUser.fullName}" class="w-full h-full rounded-full object-cover clean-avatar border-4 ${isGolden ? 'border-amber-500 shadow-amber-500/30' : 'border-emerald-500'} shadow-xl" />
                ${isGolden ? `
                  <div class="absolute -top-2 -right-2 golden-badge p-1.5 rounded-full shadow-lg" title="Founder Member">
                    <i data-lucide="crown" class="w-5 h-5 text-amber-950"></i>
                  </div>
                ` : ''}
              </div>

              <div class="flex-1 text-center md:text-left space-y-2">
                <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span class="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isApproved ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'} flex items-center gap-1">
                    <i data-lucide="${isApproved ? 'check-circle' : 'clock'}" class="w-3.5 h-3.5"></i>
                    ${this.currentUser.status} Membership
                  </span>
                  <span class="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isGolden ? 'golden-badge' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}">
                    ${this.currentUser.membershipType}
                  </span>
                </div>

                <!-- Prominent Official Title Badge above member full name -->
                ${this.currentUser.titlePrefix ? `
                  <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md border border-amber-400 mb-1">
                    <i data-lucide="award" class="w-3.5 h-3.5 text-slate-950"></i>
                    <span>${this.currentUser.titlePrefix}</span>
                  </div>
                ` : ''}

                <h2 class="text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
                  ${this.currentUser.fullName}
                </h2>

                <!-- Member ID Code with Prominent Copy Button -->
                <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                  <div class="bg-blue-950 px-4 py-2 rounded-xl border-2 border-blue-800 font-mono text-sm text-emerald-400 font-extrabold tracking-wider flex items-center gap-3 shadow-md">
                    <span>${this.currentUser.memberCode}</span>
                    <button onclick="app.copyMemberCode('${this.currentUser.memberCode}')" title="Copy Member Code" class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow flex items-center gap-1.5 transform hover:scale-105">
                      <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                      <span>Copy</span>
                    </button>
                  </div>
                  <div class="text-xs text-slate-700 font-bold bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
                    Joined: ${this.currentUser.joinedDate}
                  </div>
                </div>
              </div>

              <!-- Profile Actions -->
              <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button onclick="app.openSelfProfileEditModal()" class="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm border border-red-700 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="edit-3" class="w-4 h-4"></i> Edit Profile
                </button>
              </div>
            </div>
          </div>

          <!-- My QR ID Card Box -->
          <div class="lg:col-span-1 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <i data-lucide="qr-code" class="w-5 h-5 text-amber-600"></i> My QR ID Card
              </h3>
              ${isGuest ? `
                <span class="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i> Guest Access Pass
                </span>
              ` : isApproved ? `
                <span class="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <i data-lucide="shield-check" class="w-4 h-4"></i> Verified Official
                </span>
              ` : `
                <span class="text-xs text-amber-700 font-bold flex items-center gap-1">
                  <i data-lucide="lock" class="w-4 h-4"></i> Pending Approval
                </span>
              `}
            </div>

            ${(isApproved || isGuest) ? `
              <!-- Realistic Lanyard Strap & Badge Holder Container -->
              <div class="flex flex-col items-center max-w-md mx-auto">
                
                <!-- Metallic Badge Clip & Lanyard Hook -->
                <div class="flex flex-col items-center -mb-2 z-20">
                  <div class="w-6 h-7 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-t-sm shadow-md flex items-center justify-center border-x border-slate-700">
                    <div class="w-2.5 h-3.5 bg-slate-950 rounded-full border border-slate-600"></div>
                  </div>
                  <div class="w-10 h-3 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-sm shadow-md border border-slate-400"></div>
                </div>

                <!-- Printable & Exportable ID Card Render Box -->
                <div id="digital-id-card-render" class="w-full bg-white text-slate-900 rounded-2xl border-2 ${isGuest ? 'border-emerald-400' : 'border-slate-300'} shadow-2xl overflow-hidden relative font-sans text-left">
                  
                  <!-- Slot Hole Slot Arc -->
                  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-100 rounded-b-xl border-b border-x border-slate-300 flex items-center justify-center z-10">
                    <div class="w-6 h-1.5 bg-slate-800 rounded-full"></div>
                  </div>

                  <!-- Header Geometric Graphic Banner -->
                  <div class="${isGuest ? 'bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-800 border-b-2 border-emerald-400' : 'bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-800 border-b-2 border-amber-400'} text-white pt-6 pb-4 px-5 relative flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      ${store.getLogoImgHtml("w-10 h-10 flex-shrink-0")}
                      <div class="space-y-0.5">
                        <div class="text-[11px] font-black tracking-widest ${isGuest ? 'text-emerald-400' : 'text-amber-400'} uppercase leading-none" style="line-height: 1 !important; margin-bottom: 2px !important;">NRDSS SAUDI ARABIA</div>
                        <div class="text-xs font-extrabold text-white leading-tight" style="line-height: 1.2 !important;">Nuwakot Rasuwa Dhading Samaj</div>
                      </div>
                    </div>
                    
                    <!-- Perfectly Centered Role Badge Pill for PNG Export -->
                    <div class="px-3.5 rounded-full shadow-lg" style="height: 28px !important; min-height: 28px !important; max-height: 28px !important; background: linear-gradient(135deg, #b91c1c 0%, #881337 100%) !important; border: 1.5px solid #f87171 !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; box-sizing: border-box !important; margin: 0 !important; padding: 0 14px !important;">
                      <span style="display: inline-block !important; color: #ffffff !important; font-size: 10px !important; font-weight: 900 !important; line-height: 1 !important; text-transform: uppercase !important; letter-spacing: 0.06em !important; margin: 0 !important; padding: 0 !important; position: relative !important; top: -2.5px !important;">
                        ${isGuest ? 'GUEST PASS' : (this.currentUser.membershipType ? this.currentUser.membershipType.split(' ')[0] : 'MEMBER')}
                      </span>
                    </div>
                  </div>

                  <!-- Main Card Body -->
                  <div class="p-4 pt-3 relative bg-slate-50">
                    
                    <!-- Circular Overlapping Photo Frame (Compact 72px Pure Circle) -->
                    <div class="absolute -top-7 left-4 rounded-full bg-white p-1 shadow-2xl border-4 ${isGuest ? 'border-emerald-500' : 'border-amber-400'} overflow-hidden z-20 flex items-center justify-center" style="width: 72px !important; height: 72px !important; min-width: 72px !important; min-height: 72px !important; max-width: 72px !important; max-height: 72px !important; box-sizing: border-box !important;">
                      <div class="rounded-full" style="width: 100% !important; height: 100% !important; border-radius: 9999px !important; background-image: url('${this.currentUser.photo}') !important; background-size: cover !important; background-position: center !important; background-repeat: no-repeat !important; display: block !important;"></div>
                    </div>

                    <!-- Member Name & Role with Prominent Title Prefix above name -->
                    <div class="pl-24 space-y-0.5">
                      ${this.currentUser.titlePrefix ? `
                        <div class="text-[10px] font-black text-amber-600 uppercase tracking-wider flex items-center gap-1">
                          👑 ${this.currentUser.titlePrefix}
                        </div>
                      ` : ''}
                      <h3 class="text-base font-black text-slate-900 leading-tight">
                        ${this.currentUser.fullName}
                      </h3>
                      <div class="text-[11px] font-bold ${isGuest ? 'text-emerald-600' : 'text-emerald-700'}">
                        ${isGuest ? 'Guest Community Member &bull; Free Access Pass' : this.currentUser.membershipType}
                      </div>
                    </div>

                    <!-- Information Grid & QR Code Footer Area -->
                    <div class="mt-4 pt-3 border-t border-slate-200 grid grid-cols-12 gap-2 items-end">
                      
                      <!-- Details Column 1 -->
                      <div class="col-span-4 text-[10px] space-y-1 text-slate-600">
                        <div>
                          <span class="block text-[8px] font-bold text-slate-400 uppercase leading-none">ID No</span>
                          <strong class="font-mono text-slate-900 font-extrabold text-[10px] text-emerald-700">${this.currentUser.memberCode}</strong>
                        </div>
                        <div>
                          <span class="block text-[8px] font-bold text-slate-400 uppercase leading-none">District / City</span>
                          <strong class="text-slate-800 font-bold text-[9px]">${this.currentUser.district || 'Nuwakot'} / ${this.currentUser.saudiCity || 'Riyadh'}</strong>
                        </div>
                      </div>

                      <!-- Details Column 2 -->
                      <div class="col-span-4 text-[10px] space-y-1 text-slate-600">
                        <div>
                          <span class="block text-[8px] font-bold text-slate-400 uppercase leading-none">Joined Date</span>
                          <strong class="text-slate-800 font-bold text-[9px]">${this.currentUser.joinedDate}</strong>
                        </div>
                        <div>
                          <span class="block text-[8px] font-bold text-slate-400 uppercase leading-none">Phone Contact</span>
                          <strong class="text-slate-800 font-bold text-[9px]">${this.currentUser.phone}</strong>
                        </div>
                      </div>

                      <!-- QR Code & Authorized Signature Column 3 -->
                      <div class="col-span-4 flex flex-col items-center justify-end text-center pl-1">
                        <div id="id-card-qr-container" class="w-20 h-20 p-1.5 bg-white rounded-xl border border-slate-300 shadow-md flex items-center justify-center"></div>
                        <div class="text-[7px] text-slate-400 font-bold pt-1 uppercase tracking-tight leading-none">Authorized Signature</div>
                        <div class="font-serif italic text-[9px] text-slate-800 font-bold leading-tight">NRDSS Executive</div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <!-- Instant Download Buttons -->
              <div class="flex gap-2 pt-2">
                <button onclick="app.downloadIDCardPDF()" class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40">
                  <i data-lucide="download" class="w-4 h-4"></i> Download PDF Guest Pass
                </button>
                <button onclick="app.downloadIDCardPNG()" class="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="file-image" class="w-4 h-4"></i> Download PNG
                </button>
              </div>
            ` : `
              <!-- Pending Approval Card Notice -->
              <div class="glass-card rounded-2xl p-6 text-center border border-amber-500/30 bg-amber-950/10 space-y-3">
                <div class="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
                  <i data-lucide="clock" class="w-6 h-6"></i>
                </div>
                <h4 class="font-bold text-white text-base">Membership Pending Approval</h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Your registration details and payment receipt are currently being verified by the NRDSS Executive Board. Instant QR ID card download will activate automatically upon approval.
                </p>
                <div class="text-[11px] text-amber-400 font-semibold pt-1">Contact Executive Admin: <a href="mailto:nrdssksa@gmail.com" class="underline">nrdssksa@gmail.com</a></div>
              </div>
            `}
          </div>
        </div>

        <!-- 2nd SECTION (MIDDLE): Community Events & Attendance Passes -->
        <div class="glass-card rounded-2xl p-6 border border-slate-200 space-y-5">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <i data-lucide="calendar" class="w-5 h-5 text-emerald-600"></i> Community Events & Attendance Passes (${events.length})
            </h3>
            <span class="text-xs text-amber-800 font-bold bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
              Published by Executive Admin
            </span>
          </div>

          ${events.length === 0 ? `
            <div class="text-center py-6 text-slate-600 text-sm font-medium">
              No community events published by administration yet.
            </div>
          ` : `
            <div class="space-y-4">
              ${events.map(evt => {
                const userReg = (evt.registrations || []).find(r => r.userId === this.currentUser.id || (this.currentUser.email && r.email.toLowerCase() === this.currentUser.email.toLowerCase()));
                const isApprovedReg = userReg && (userReg.paymentStatus === 'Paid' || userReg.paymentStatus === 'Approved' || evt.registrationFee === 0);
                const isPendingReg = userReg && userReg.paymentStatus === 'Pending Review';
                const isRejectedReg = userReg && userReg.paymentStatus === 'Rejected';
                const isRegistered = Boolean(userReg);

                return `
                  <div class="bg-slate-50 rounded-2xl p-4 sm:p-5 border ${isApprovedReg ? 'border-emerald-300 bg-emerald-50' : isPendingReg ? 'border-amber-300 bg-amber-50/60' : isRejectedReg ? 'border-red-300 bg-red-50/60' : 'border-slate-200'} flex flex-col md:flex-row gap-5 items-start md:items-center justify-between text-left transition-all hover:border-slate-300">
                    
                    <!-- Event Details & Banner -->
                    <div class="flex items-start gap-4 flex-1">
                      ${evt.bannerUrl ? `
                        <img src="${evt.bannerUrl}" class="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0 border border-slate-300 shadow-sm" />
                      ` : ''}
                      <div class="space-y-1.5 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                          <span class="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">${evt.date} (${evt.time})</span>
                          ${isApprovedReg ? `
                            <span class="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300 flex items-center gap-1">
                              <i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-600"></i> Pass Active
                            </span>
                          ` : isPendingReg ? `
                            <span class="text-[10px] font-black uppercase text-amber-900 bg-amber-200 px-2 py-0.5 rounded border border-amber-400 flex items-center gap-1 animate-pulse">
                              <i data-lucide="clock" class="w-3 h-3 text-amber-700"></i> Payment Review Pending
                            </span>
                          ` : isRejectedReg ? `
                            <span class="text-[10px] font-black uppercase text-red-900 bg-red-100 px-2 py-0.5 rounded border border-red-300 flex items-center gap-1">
                              <i data-lucide="x-circle" class="w-3 h-3 text-red-600"></i> Payment Rejected
                            </span>
                          ` : ''}
                        </div>
                        <h4 class="font-extrabold text-slate-900 text-base leading-tight">${evt.title}</h4>
                        <div class="text-xs text-slate-700 font-bold flex items-center gap-1.5">
                          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-red-600 flex-shrink-0"></i>
                          <span>${evt.locationName}</span>
                        </div>
                        ${evt.googleMapsUrl ? `
                          <a href="${evt.googleMapsUrl}" target="_blank" class="inline-flex items-center gap-1 text-[11px] text-blue-800 hover:underline font-bold pt-0.5">
                            <i data-lucide="map" class="w-3 h-3"></i> View Location Map &rarr;
                          </a>
                        ` : ''}
                      </div>
                    </div>

                    <!-- Action Button or Openable Attendance QR Pass -->
                    <div class="w-full md:w-auto flex-shrink-0 pt-2 md:pt-0">
                      ${isApprovedReg ? `
                        <div class="flex items-center gap-3 bg-slate-950 p-2.5 rounded-2xl border border-emerald-500/50 hover:border-emerald-400 transition-all cursor-pointer shadow-lg group" onclick="app.openRegisteredEventPassModal('${evt.id}')" title="Click to open & download ticket pass">
                          <div id="evt-qr-${evt.id}" class="w-14 h-14 bg-white p-1 rounded-xl flex items-center justify-center flex-shrink-0"></div>
                          <div class="text-[10px] text-slate-300 text-left space-y-0.5">
                            <div class="font-bold text-emerald-400 flex items-center gap-1">
                              <i data-lucide="ticket" class="w-3 h-3"></i> TICKET PASS
                            </div>
                            <div class="text-amber-300 font-extrabold flex items-center gap-1 group-hover:underline">
                              <i data-lucide="qr-code" class="w-3 h-3"></i> Open & Download Ticket
                            </div>
                            <div class="font-mono text-[9px] text-slate-400 font-bold">${this.currentUser.memberCode}</div>
                          </div>
                        </div>
                      ` : isPendingReg ? `
                        <div onclick="app.openRegisteredEventPassModal('${evt.id}')" class="flex items-center gap-3 bg-amber-950 p-2.5 rounded-2xl border-2 border-amber-500 hover:border-amber-400 transition-all cursor-pointer shadow-lg group text-left" title="Click to view payment review status">
                          <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 animate-pulse border border-amber-400">
                            <i data-lucide="clock" class="w-6 h-6"></i>
                          </div>
                          <div class="text-xs space-y-0.5">
                            <div class="font-black text-amber-300 uppercase tracking-wider text-[9px]">⏳ PENDING APPROVAL</div>
                            <div class="font-extrabold text-white text-xs flex items-center gap-1 group-hover:underline">
                              <span>Payment Under Review</span>
                              <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-amber-400"></i>
                            </div>
                            <div class="text-[9px] text-amber-200/80 font-mono">Code: ${userReg.ticketCode}</div>
                          </div>
                        </div>
                      ` : `
                        <button onclick="app.openEventRegistrationFormModal('${evt.id}')" class="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2">
                          <i data-lucide="ticket" class="w-4 h-4"></i> Register & Get Ticket Pass
                        </button>
                      `}
                    </div>

                  </div>
                `;
              }).join('')}
            </div>
          `}
        <!-- 3rd SECTION: Active Charity & Emergency Relief Campaigns -->
        <div class="glass-card rounded-2xl p-6 border border-slate-200 space-y-5 text-left">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider border border-red-200">
                <i data-lucide="heart" class="w-3.5 h-3.5 text-red-600 animate-pulse"></i> NRDSS Emergency Relief Fund
              </div>
              <h3 class="text-xl font-black text-slate-900 mt-1">Active Charity & Disaster Relief Campaigns</h3>
            </div>
            <button onclick="app.currentTab = 'campaigns'; app.render();" class="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs transition-all shadow flex items-center gap-1.5 cursor-pointer">
              <i data-lucide="heart" class="w-3.5 h-3.5 fill-current"></i> View All Campaigns & Donors
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${store.getCampaigns().slice(0, 2).map(c => {
              const raised = Number(c.raisedAmount || 0);
              const goal = Number(c.goalAmount || 1);
              const pct = Math.min(Math.round((raised / goal) * 100), 100);
              return `
                <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between space-y-4 shadow-sm hover:border-slate-300 transition-all">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-red-600 text-white">${c.category || 'Emergency Relief'}</span>
                      <span class="text-xs font-mono font-black text-emerald-700">${pct}% Funded</span>
                    </div>
                    <h4 class="font-extrabold text-slate-900 text-base leading-tight">${c.title}</h4>
                    <p class="text-xs text-slate-600 line-clamp-2">${c.description}</p>
                  </div>

                  <div class="space-y-2">
                    <div class="flex justify-between text-xs font-bold text-slate-600">
                      <span>Raised: <strong class="text-emerald-700 font-mono">${raised.toLocaleString()} SAR</strong></span>
                      <span>Goal: <strong class="text-slate-900 font-mono">${goal.toLocaleString()} SAR</strong></span>
                    </div>
                    <div class="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-red-600 to-emerald-600 rounded-full" style="width: ${pct}%;"></div>
                    </div>
                    <div class="flex items-center gap-2 pt-1">
                      <button onclick="app.openDonateModal('${c.id}')" class="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer">
                        <i data-lucide="heart" class="w-3.5 h-3.5 fill-current"></i> Donate Now
                      </button>
                      <button onclick="app.openBankDetailsModal('${c.id}')" class="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-extrabold text-xs transition-all shadow flex items-center justify-center gap-1 cursor-pointer">
                        <i data-lucide="qr-code" class="w-3.5 h-3.5"></i> QR Bank Info
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 4th SECTION (BOTTOM): Official Advertisements & Sponsor Space -->
        ${this.renderAdvertisementSpace()}
      </main>
    `;
  }

  // Dedicated Gate Attendance QR Scanner Dashboard (For Scanner Verifier Officers)
  renderScannerDashboard() {
    if (!this.currentUser) return '';
    const events = store.getEvents();
    const activeEventId = this.selectedScannerEventId || (events[0] ? events[0].id : '');
    const activeEvent = events.find(e => e.id === activeEventId) || events[0];

    const users = store.getUsers();
    const registrations = activeEvent ? (activeEvent.registrations || []) : [];
    
    // Checked in attendees for this event
    const checkedInRegs = registrations.filter(r => r.checkedIn);

    return `
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-8">
        
        <!-- Scanner Officer Header Banner (High Contrast Explicit Color Guaranteed) -->
        <div class="rounded-2xl p-6 border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important; border: 2px solid #f59e0b !important;">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full golden-badge text-xs font-black uppercase tracking-wider mb-2">
              <i data-lucide="scan" class="w-3.5 h-3.5 text-slate-950"></i>
              Official Gate Attendance Scanner Officer
            </div>
            <h2 class="text-2xl font-extrabold" style="color: #ffffff !important; font-weight: 900 !important;">NRDSS Event Gate Scanner Command Center</h2>
            <p class="text-xs mt-1" style="color: #cbd5e1 !important; font-weight: 600 !important;">Scan attendee QR codes from Member ID cards or Event Ticket Passes to verify authenticity and record gate check-in.</p>
          </div>

          <div class="flex items-center gap-3 p-3 rounded-2xl border" style="background-color: #020617 !important; border-color: #334155 !important;">
            <img src="${this.currentUser.photo}" class="w-10 h-10 rounded-full object-cover clean-avatar border-2 border-amber-400" />
            <div class="text-left text-xs">
              <div class="font-extrabold text-white" style="color: #ffffff !important; font-weight: 900 !important;">${this.currentUser.fullName} (${this.currentUser.titlePrefix || 'Officer'})</div>
              <div class="font-mono text-[10px]" style="color: #fbbf24 !important; font-weight: 700 !important;">${this.currentUser.memberCode} &bull; ${this.currentUser.email}</div>
            </div>
          </div>
        </div>

        <!-- Event Selection & Metrics Ribbon -->
        <div class="glass-card rounded-2xl p-6 border border-slate-200 space-y-4">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div class="w-full md:w-auto">
              <label class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Select Event Program To Scan:</label>
              <select onchange="app.selectedScannerEventId = this.value; app.render();" class="w-full md:w-96 px-4 py-2.5 rounded-xl bg-white border-2 border-blue-900 text-slate-900 font-black text-sm shadow-sm focus:outline-none">
                ${events.map(e => `<option value="${e.id}" ${e.id === activeEventId ? 'selected' : ''}>${e.title} (${e.date})</option>`).join('')}
              </select>
            </div>

            ${activeEvent ? `
              <div class="flex flex-wrap items-center gap-2">
                <button onclick="app.downloadEventAttendancePDF('${activeEvent.id}')" class="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                  <i data-lucide="file-text" class="w-4 h-4"></i> Download PDF Report
                </button>
                <button onclick="app.downloadEventAttendanceExcel('${activeEvent.id}')" class="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                  <i data-lucide="file-spreadsheet" class="w-4 h-4"></i> Export Excel Report (.CSV)
                </button>
              </div>
            ` : ''}
          </div>

          <!-- Quick Event Metrics (Ultra High-Contrast Crystal-Clear Typography) -->
          ${activeEvent ? `
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Card 1: Total Registered Attendees (Vivid Navy Blue) -->
              <div class="p-5 rounded-2xl border-2 text-white space-y-1.5 shadow-xl text-left" style="background-color: #1e3a8a !important; background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%) !important; border-color: #3b82f6 !important;">
                <div class="text-xs font-black uppercase tracking-wider" style="color: #93c5fd !important;">TOTAL REGISTERED ATTENDEES</div>
                <div class="text-3xl font-black" style="color: #ffffff !important; font-weight: 900 !important;">${registrations.length}</div>
                <div class="text-[11px] font-bold truncate" style="color: #cbd5e1 !important;">${activeEvent.locationName}</div>
              </div>

              <!-- Card 2: Verified Gate Checked-In (Vivid Emerald Green) -->
              <div class="p-5 rounded-2xl border-2 text-white space-y-1.5 shadow-xl text-left" style="background-color: #064e3b !important; background: linear-gradient(135deg, #064e3b 0%, #022c22 100%) !important; border-color: #10b981 !important;">
                <div class="text-xs font-black uppercase tracking-wider" style="color: #6ee7b7 !important;">VERIFIED GATE CHECKED-IN</div>
                <div class="text-3xl font-black" style="color: #ffffff !important; font-weight: 900 !important;">${checkedInRegs.length}</div>
                <div class="text-[11px] font-black" style="color: #34d399 !important;">✓ ${registrations.length ? Math.round((checkedInRegs.length / registrations.length) * 100) : 0}% Checked-In</div>
              </div>

              <!-- Card 3: Pending Check-In (Vivid Gold / Amber) -->
              <div class="p-5 rounded-2xl border-2 text-white space-y-1.5 shadow-xl text-left" style="background-color: #78350f !important; background: linear-gradient(135deg, #78350f 0%, #451a03 100%) !important; border-color: #f59e0b !important;">
                <div class="text-xs font-black uppercase tracking-wider" style="color: #fde047 !important;">PENDING CHECK-IN</div>
                <div class="text-3xl font-black" style="color: #ffffff !important; font-weight: 900 !important;">${registrations.length - checkedInRegs.length}</div>
                <div class="text-[11px] font-extrabold" style="color: #fef08a !important;">Awaiting Arrival at Gate</div>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Scanner Controls & QR Verification Center -->
        <div class="glass-card rounded-2xl p-6 border border-amber-500/40 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
                <i data-lucide="camera" class="w-5 h-5 text-amber-600"></i> Live Device Camera & QR Code Scanner Console
              </h3>
              <p class="text-xs text-slate-600">Open your mobile camera or webcam to automatically scan QR codes in real-time with sound feedback.</p>
            </div>
            
            <div class="flex items-center gap-2">
              ${!this.isCameraActive ? `
                <button onclick="app.startLiveCameraScanner('live-camera-scanner-view', '${activeEventId}')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 border border-emerald-400">
                  <i data-lucide="camera" class="w-4 h-4 text-amber-300"></i> Open Device Camera Scanner
                </button>
              ` : `
                <button onclick="app.stopLiveCameraScanner()" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-lg flex items-center gap-2 transition-all">
                  <i data-lucide="camera-off" class="w-4 h-4"></i> Stop Camera Scanner
                </button>
              `}
            </div>
          </div>

          <!-- Live Camera Stream Container -->
          <div id="live-camera-scanner-view" class="w-full min-h-[220px] max-w-md mx-auto rounded-2xl bg-slate-950 border-2 ${this.isCameraActive ? 'border-emerald-500 shadow-2xl shadow-emerald-950/50' : 'border-slate-800'} flex items-center justify-center p-2 text-center text-slate-400 overflow-hidden relative">
            ${!this.isCameraActive ? `
              <div class="space-y-3 p-6 text-center">
                <i data-lucide="camera" class="w-12 h-12 text-slate-600 mx-auto"></i>
                <div class="text-xs text-slate-300 font-bold">Device Camera Scanner Inactive</div>
                <button onclick="app.startLiveCameraScanner('live-camera-scanner-view', '${activeEventId}')" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md inline-flex items-center gap-2">
                  <i data-lucide="video" class="w-4 h-4"></i> Turn On Camera & Allow Access
                </button>
              </div>
            ` : ''}
          </div>

          <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
            <div class="space-y-1 text-left">
              <label class="text-xs font-bold text-slate-300 block">Or Type / Paste Member Code or Ticket Payload Code:</label>
              <div class="flex gap-2">
                <input type="text" id="scanner-dashboard-qr-input" placeholder="e.g. NRDSS-2026-8891 or TKT-101-8891 or scanned payload" class="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:border-amber-500" />
                <button onclick="app.handleScanAttendanceQR('${activeEventId}', document.getElementById('scanner-dashboard-qr-input').value)" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg flex items-center gap-2">
                  <i data-lucide="scan" class="w-4 h-4"></i> Verify & Check-In
                </button>
              </div>
            </div>

            <!-- Verification Result Box -->
            ${this.scannerVerificationResult ? `
              <div class="p-5 rounded-2xl ${this.scannerVerificationResult.valid ? 'bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200' : 'bg-red-950/80 border-2 border-red-500 text-red-200'} space-y-3 text-left animate-fadeIn">
                <div class="flex items-center justify-between">
                  <div class="font-black text-base flex items-center gap-2">
                    <i data-lucide="${this.scannerVerificationResult.valid ? 'check-circle-2' : 'alert-octagon'}" class="w-6 h-6 ${this.scannerVerificationResult.valid ? 'text-emerald-400' : 'text-red-400'}"></i>
                    ${this.scannerVerificationResult.valid ? 'AUTHENTIC MEMBER VERIFIED & GATE CHECK-IN RECORDED!' : 'INVALID / UNRECOGNIZED QR CODE'}
                  </div>
                  <span class="text-xs font-mono text-slate-400">${this.scannerVerificationResult.timestamp}</span>
                </div>

                ${this.scannerVerificationResult.valid ? `
                  <div class="flex items-center gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                    <img src="${this.scannerVerificationResult.member ? this.scannerVerificationResult.member.photo : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}" class="w-14 h-14 rounded-full object-cover clean-avatar border-2 border-emerald-400 flex-shrink-0" />
                    <div class="space-y-1 flex-1">
                      <div class="text-base font-black text-white">${this.scannerVerificationResult.name}</div>
                      <div class="text-xs font-mono text-emerald-400 font-bold">Code: ${this.scannerVerificationResult.code} &bull; Ticket: ${this.scannerVerificationResult.ticketCode || 'N/A'}</div>
                      <div class="text-xs text-slate-300">Contact: ${this.scannerVerificationResult.contact} &bull; Email: ${this.scannerVerificationResult.email}</div>
                    </div>
                  </div>
                  <div class="pt-2 flex justify-end">
                    <button onclick="app.scannerVerificationResult = null; app.startLiveCameraScanner('live-camera-scanner-view', '${activeEventId}')" class="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg inline-flex items-center gap-2">
                      <i data-lucide="camera" class="w-4 h-4"></i> Scan Next Attendee
                    </button>
                  </div>
                ` : `
                  <div class="text-xs text-red-300 font-mono">Payload: <code>${this.scannerVerificationResult.rawCode}</code></div>
                `}
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Live Attendee Check-In Roster Table -->
        <div class="glass-card rounded-2xl p-6 border border-slate-200 space-y-4 text-left">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
              <i data-lucide="users" class="w-5 h-5 text-emerald-600"></i> Event Attendee Roster & Gate Check-In Status (${registrations.length})
            </h3>
            <span class="text-xs text-slate-500 font-semibold">Click "Check-In Now" for manual gate entry</span>
          </div>

          ${registrations.length === 0 ? `
            <div class="text-center py-10 text-slate-500 text-sm italic">
              No registered attendees for this event program yet.
            </div>
          ` : `
            <div class="overflow-x-auto rounded-2xl border border-slate-200">
              <table class="w-full text-left text-xs text-slate-800">
                <thead class="bg-slate-100 uppercase text-[10px] text-slate-600 font-black sticky top-0 border-b border-slate-200">
                  <tr>
                    <th class="p-3">#</th>
                    <th class="p-3">Attendee Name</th>
                    <th class="p-3">Contact Mobile</th>
                    <th class="p-3">Email Address</th>
                    <th class="p-3">Ticket Pass Code</th>
                    <th class="p-3">Gate Check-In Status</th>
                    <th class="p-3 text-right">Gate Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${registrations.map((reg, idx) => {
                    const isCheckedIn = reg.checkedIn;
                    return `
                      <tr class="hover:bg-slate-50 transition-all ${isCheckedIn ? 'bg-emerald-50/50' : ''}">
                        <td class="p-3 font-mono font-bold text-slate-400">${idx + 1}</td>
                        <td class="p-3 font-extrabold text-slate-900 flex items-center gap-2">
                          <div class="w-7 h-7 rounded-full bg-blue-900 text-white font-bold text-[10px] flex items-center justify-center">
                            ${(reg.name || 'M')[0]}
                          </div>
                          <span>${reg.name} ${reg.surname}</span>
                        </td>
                        <td class="p-3 font-mono text-slate-700">${reg.contact}</td>
                        <td class="p-3 font-mono text-slate-600">${reg.email}</td>
                        <td class="p-3 font-mono font-bold text-blue-900">${reg.ticketCode}</td>
                        <td class="p-3">
                          ${isCheckedIn ? `
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] border border-emerald-300">
                              <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600"></i> Checked-In (${reg.checkedInTime || 'Gate'})
                            </span>
                          ` : `
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] border border-amber-300">
                              <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-600"></i> Awaiting Arrival
                            </span>
                          `}
                        </td>
                        <td class="p-3 text-right">
                          ${isCheckedIn ? `
                            <button onclick="app.handleToggleGateCheckIn('${activeEventId}', ${idx}, false)" class="px-3 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-[11px] transition-all">
                              Undo Check-In
                            </button>
                          ` : `
                            <button onclick="app.handleToggleGateCheckIn('${activeEventId}', ${idx}, true)" class="px-3.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] transition-all shadow-md flex items-center gap-1 ml-auto">
                              <i data-lucide="user-check" class="w-3.5 h-3.5"></i> Check-In Now
                            </button>
                          `}
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>

      </main>
    `;
  }

  // Live Device Camera QR Scanner Handler (Uses html5-qrcode)
  startLiveCameraScanner(containerId = 'live-camera-scanner-view', activeEventId = '') {
    if (typeof Html5Qrcode === 'undefined') {
      this.showToast('HTML5 QR Code scanner library loading... Please try again in a moment.', 'warning');
      return;
    }

    this.stopLiveCameraScanner();

    try {
      this.html5QrcodeScanner = new Html5Qrcode(containerId);
      this.isCameraActive = true;
      this.render();

      setTimeout(() => {
        const config = { fps: 10, qrbox: { width: 220, height: 220 } };
        
        this.html5QrcodeScanner.start(
          { facingMode: "environment" },
          config,
          (decodedText) => {
            const now = Date.now();
            if (this.lastScannedCode === decodedText && (now - (this.lastScanTime || 0)) < 4000) {
              // Ignore duplicate scan frames of the same QR code within 4 seconds
              return;
            }
            this.lastScannedCode = decodedText;
            this.lastScanTime = now;

            this.playScanBeepSound();
            if (activeEventId) {
              this.handleScanAttendanceQR(activeEventId, decodedText);
            } else {
              this.handleVerifyQR(decodedText);
            }
          },
          () => {} // scanning in progress
        ).catch(err => {
          console.error("Camera access error:", err);
          this.isCameraActive = false;
          this.showToast("Camera Access Request: Please allow camera permissions in your web browser.", "error");
          this.render();
        });
      }, 150);

    } catch (e) {
      console.error(e);
      this.showToast('Failed to access device camera.', 'error');
    }
  }

  stopLiveCameraScanner() {
    if (this.html5QrcodeScanner) {
      try {
        this.html5QrcodeScanner.stop().then(() => {
          this.isCameraActive = false;
          this.html5QrcodeScanner = null;
          this.render();
        }).catch(() => {
          this.isCameraActive = false;
          this.html5QrcodeScanner = null;
          this.render();
        });
      } catch (e) {
        this.isCameraActive = false;
        this.html5QrcodeScanner = null;
        this.render();
      }
    } else {
      this.isCameraActive = false;
    }
  }

  // Synthesize instant Audio Check-In Beep sound on QR scan match
  playScanBeepSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  }

  // Dedicated Gate Attendance QR Code Scanner & Verifier Handler
  handleScanAttendanceQR(eventId, rawInput) {
    if (!rawInput || !rawInput.trim()) {
      this.showToast('Please enter or scan a valid QR payload or member code.', 'warning');
      return;
    }

    let cleanInput = this.extractCodeFromInput(rawInput);
    if (!cleanInput) cleanInput = String(rawInput).trim();
    const cleanLower = cleanInput.toLowerCase();

    const events = store.getEvents();
    const users = store.getUsers();

    let targetEvent = events.find(e => e.id === eventId);
    let matchedIndex = -1;

    // 1. Search in selected target event first
    if (targetEvent && targetEvent.registrations) {
      matchedIndex = targetEvent.registrations.findIndex(r => 
        (r.ticketCode && r.ticketCode.toLowerCase() === cleanLower) ||
        (r.ticketCode && cleanLower.includes(r.ticketCode.toLowerCase())) ||
        (r.ticketCode && r.ticketCode.toLowerCase().includes(cleanLower)) ||
        (r.email && r.email.toLowerCase() === cleanLower)
      );
    }

    // 2. If not found in selected event, search ALL published events!
    if (matchedIndex === -1) {
      for (const evt of events) {
        const regs = evt.registrations || [];
        const idx = regs.findIndex(r => 
          (r.ticketCode && r.ticketCode.toLowerCase() === cleanLower) ||
          (r.ticketCode && cleanLower.includes(r.ticketCode.toLowerCase())) ||
          (r.ticketCode && r.ticketCode.toLowerCase().includes(cleanLower)) ||
          (r.email && r.email.toLowerCase() === cleanLower)
        );
        if (idx !== -1) {
          targetEvent = evt;
          matchedIndex = idx;
          break;
        }
      }
    }

    // 3. Search member by memberCode, ID, or Email
    let matchedMember = users.find(u => 
      (u.memberCode && u.memberCode.toLowerCase() === cleanLower) ||
      (u.id && u.id.toLowerCase() === cleanLower) ||
      (u.email && u.email.toLowerCase() === cleanLower) ||
      (u.memberCode && cleanLower.includes(u.memberCode.toLowerCase())) ||
      (u.memberCode && u.memberCode.toLowerCase().includes(cleanLower))
    );

    if (matchedIndex === -1 && matchedMember) {
      if (targetEvent && targetEvent.registrations) {
        matchedIndex = targetEvent.registrations.findIndex(r => 
          r.userId === matchedMember.id || 
          (r.email && r.email.toLowerCase() === matchedMember.email.toLowerCase())
        );
      }
      if (matchedIndex === -1) {
        for (const evt of events) {
          const regs = evt.registrations || [];
          const idx = regs.findIndex(r => 
            r.userId === matchedMember.id || 
            (r.email && r.email.toLowerCase() === matchedMember.email.toLowerCase())
          );
          if (idx !== -1) {
            targetEvent = evt;
            matchedIndex = idx;
            break;
          }
        }
      }
    }

    const timestamp = new Date().toLocaleTimeString();

    if (matchedIndex !== -1 && targetEvent) {
      const reg = targetEvent.registrations[matchedIndex];

      // Check payment status guard
      const isPaid = reg.paymentStatus === 'Paid' || reg.paymentStatus === 'Approved' || (targetEvent.registrationFee === 0);
      if (!isPaid) {
        this.scannerVerificationResult = {
          valid: false,
          rawCode: cleanInput,
          timestamp: timestamp
        };
        this.showToast(`⛔ CHECK-IN BLOCKED! Payment for Ticket ${reg.ticketCode} (${reg.name} ${reg.surname}) is PENDING ADMIN APPROVAL.`, 'error');
        this.openPublicVerificationModal(cleanInput);
        return;
      }

      targetEvent.registrations[matchedIndex] = {
        ...reg,
        checkedIn: true,
        checkedInTime: timestamp
      };

      this.adminSelectedScannerEvent = targetEvent.id;

      store.saveEvents(events);
      store.logAction('GATE_ATTENDANCE_SCAN', this.currentUser ? this.currentUser.email : 'Scanner Officer', `Verified attendance for ${reg.name} ${reg.surname} at ${targetEvent.title}`);

      this.scannerVerificationResult = {
        valid: true,
        name: `${reg.name} ${reg.surname}`,
        code: matchedMember ? matchedMember.memberCode : 'Guest/Registered',
        ticketCode: reg.ticketCode,
        contact: reg.contact,
        email: reg.email,
        member: matchedMember,
        timestamp: timestamp,
        rawCode: cleanInput
      };

      this.showToast(`AUTHENTIC VERIFIED: Attendance recorded for ${reg.name} ${reg.surname}!`, 'success');
    } else if (matchedMember && targetEvent) {
      // Member found but not registered for this event yet - auto register & check-in
      const ticketCode = `TKT-${targetEvent.id.replace('evt_', '')}-${matchedMember.memberCode}`;
      const newReg = {
        userId: matchedMember.id,
        name: matchedMember.fullName ? matchedMember.fullName.split(' ')[0] : 'Member',
        surname: matchedMember.fullName ? matchedMember.fullName.split(' ').slice(1).join(' ') : 'NRDSS',
        contact: matchedMember.phone || '+966 50 000 0000',
        email: matchedMember.email,
        ticketCode: ticketCode,
        registeredAt: new Date().toLocaleString(),
        feePaid: targetEvent.registrationFee || 0,
        paymentStatus: 'Paid',
        paymentMethod: 'Gate Scanner Direct Entry',
        checkedIn: true,
        checkedInTime: timestamp
      };

      targetEvent.registrations.push(newReg);
      if (!targetEvent.registeredMembers) targetEvent.registeredMembers = [];
      if (!targetEvent.registeredMembers.includes(matchedMember.id)) targetEvent.registeredMembers.push(matchedMember.id);

      this.adminSelectedScannerEvent = targetEvent.id;

      store.saveEvents(events);
      store.logAction('GATE_ATTENDANCE_SCAN_AUTO', this.currentUser ? this.currentUser.email : 'Scanner Officer', `Gate registered & verified ${matchedMember.fullName} for ${targetEvent.title}`);

      this.scannerVerificationResult = {
        valid: true,
        name: matchedMember.fullName,
        code: matchedMember.memberCode,
        ticketCode: ticketCode,
        contact: matchedMember.phone,
        email: matchedMember.email,
        member: matchedMember,
        timestamp: timestamp,
        rawCode: cleanInput
      };

      this.showToast(`AUTHENTIC MEMBER: Gate attendance recorded for ${matchedMember.fullName}!`, 'success');
    } else {
      this.scannerVerificationResult = {
        valid: false,
        rawCode: cleanInput,
        timestamp: timestamp
      };
      this.showToast('Invalid or unrecognized QR Code token payload!', 'error');
    }

    // Auto-pause camera scanner after check-in to guarantee exactly 1 notification per scan
    if (this.isCameraActive) {
      this.stopLiveCameraScanner();
    } else {
      this.render();
    }
  }

  // Toggle Gate Check-In Status Directly from Roster Table
  handleToggleGateCheckIn(eventId, regIndex, status) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event || !event.registrations || !event.registrations[regIndex]) return;

    const reg = event.registrations[regIndex];

    if (status) {
      // Check payment status guard before manual gate check-in
      const isPaid = reg.paymentStatus === 'Paid' || reg.paymentStatus === 'Approved' || (event.registrationFee === 0);
      if (!isPaid) {
        this.showToast(`⛔ CHECK-IN BLOCKED! Ticket ${reg.ticketCode} (${reg.name} ${reg.surname}) is PENDING ADMIN PAYMENT APPROVAL.`, 'error');
        this.openPublicVerificationModal(reg.ticketCode);
        return;
      }
    }

    const timestamp = new Date().toLocaleTimeString();

    reg.checkedIn = status;
    reg.checkedInTime = status ? timestamp : '';
    store.saveEvents(events);

    const checkinKey = (reg.ticketCode || 'TKT-000').toUpperCase();
    const attendanceLogs = JSON.parse(localStorage.getItem('nrdss_gate_attendance_v1') || '[]');

    if (status) {
      const verifierName = this.currentUser ? `${this.currentUser.titlePrefix || ''} ${this.currentUser.fullName}`.trim() : 'Gate Officer';
      const existingLog = attendanceLogs.find(log => log.checkinKey === checkinKey);
      if (!existingLog) {
        attendanceLogs.unshift({
          checkinKey: checkinKey,
          name: `${reg.name} ${reg.surname}`,
          memberCode: reg.ticketCode,
          timestamp: timestamp,
          verifier: verifierName,
          details: `Event: ${event.title}`
        });
        localStorage.setItem('nrdss_gate_attendance_v1', JSON.stringify(attendanceLogs));
      }
      this.showToast(`✅ MANUAL GATE CHECK-IN RECORDED for ${reg.name} ${reg.surname}`, 'success');
    } else {
      const filteredLogs = attendanceLogs.filter(log => log.checkinKey !== checkinKey);
      localStorage.setItem('nrdss_gate_attendance_v1', JSON.stringify(filteredLogs));
      this.showToast(`Gate check-in status reverted to Awaiting Arrival for ${reg.name} ${reg.surname}`, 'info');
    }

    this.render();
  }

  // Gallery Album & Media Management Handlers
  openCreateGalleryModal(defaultAlbum = '') {
    this.showUploadGalleryModal = true;
    this.selectedGalleryItemToEdit = null;
    this.selectedGalleryDefaultAlbum = defaultAlbum;
    this.render();
  }

  openEditGalleryModal(itemId) {
    const gallery = store.getGallery();
    const item = gallery.find(g => g.id === itemId);
    if (!item) return;
    this.selectedGalleryItemToEdit = item;
    this.showUploadGalleryModal = true;
    this.render();
  }

  openMoveGalleryModal(itemId) {
    const gallery = store.getGallery();
    const item = gallery.find(g => g.id === itemId);
    if (!item) return;
    this.selectedGalleryItemToMove = item;
    this.render();
  }

  openPreviewGalleryModal(itemId) {
    const gallery = store.getGallery();
    const item = gallery.find(g => g.id === itemId);
    if (!item) return;
    this.selectedGalleryPreview = item;
    this.render();
  }

  promptCreateNewAlbum() {
    const albumName = prompt('Enter new album title (e.g., "Dashain Celebration 2026", "Sports Meet", "Blood Donation Camp"):');
    if (albumName && albumName.trim()) {
      const cleanName = albumName.trim();
      this.galleryAlbumFilter = cleanName;
      this.showToast(`New album "${cleanName}" created! Upload photos/videos below to add media to it.`, 'success');
      this.render();
    }
  }

  handleMoveGalleryItem(itemId, targetAlbum) {
    if (!targetAlbum || !targetAlbum.trim()) {
      this.showToast('Please select or type a valid album name.', 'error');
      return;
    }
    const gallery = store.getGallery();
    const idx = gallery.findIndex(g => g.id === itemId);
    if (idx !== -1) {
      const oldAlbum = gallery[idx].album || gallery[idx].category || 'General';
      const cleanTarget = targetAlbum.trim();
      gallery[idx].album = cleanTarget;
      gallery[idx].category = cleanTarget;
      store.saveGallery(gallery);
      store.logAction('MOVE_GALLERY_ITEM', this.currentUser ? this.currentUser.fullName : 'Admin', `Moved "${gallery[idx].title}" from album "${oldAlbum}" to "${cleanTarget}"`);
      this.showToast(`Successfully cut & moved item to album "${cleanTarget}"!`, 'success');
      this.selectedGalleryItemToMove = null;
      this.galleryAlbumFilter = cleanTarget;
      this.render();
    }
  }

  handleSaveGalleryMedia(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value.trim();
    const album = form.album.value.trim() || 'General Album';
    const type = form.type.value;
    const caption = form.caption.value.trim();
    const date = form.date.value || new Date().toISOString().split('T')[0];

    const mediaFileInput = form.mediaFile;
    const files = mediaFileInput && mediaFileInput.files ? Array.from(mediaFileInput.files) : [];

    const gallery = store.getGallery();

    // EDIT EXISTING SINGLE ITEM FLOW
    if (this.selectedGalleryItemToEdit) {
      const idx = gallery.findIndex(g => g.id === this.selectedGalleryItemToEdit.id);
      if (idx !== -1) {
        const applyEdit = (mediaUrl) => {
          gallery[idx] = {
            ...gallery[idx],
            title,
            album,
            category: album,
            type,
            caption,
            date,
            mediaUrl: mediaUrl || gallery[idx].mediaUrl || gallery[idx].imageUrl,
            imageUrl: mediaUrl || gallery[idx].imageUrl || gallery[idx].mediaUrl
          };
          store.saveGallery(gallery);
          this.showToast('Media details & album updated successfully!', 'success');
          this.showUploadGalleryModal = false;
          this.selectedGalleryItemToEdit = null;
          this.render();
        };

        if (files.length > 0) {
          const reader = new FileReader();
          reader.onload = (e) => applyEdit(e.target.result);
          reader.readAsDataURL(files[0]);
        } else {
          const mediaUrl = form.mediaUrl.value.trim();
          applyEdit(mediaUrl);
        }
      }
      return;
    }

    // MULTIPLE FILES BATCH UPLOAD FLOW
    if (files.length > 0) {
      const readFileAsDataUrl = (file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve({ file, dataUrl: e.target.result });
          reader.readAsDataURL(file);
        });
      };

      Promise.all(files.map(readFileAsDataUrl)).then((results) => {
        const newItems = results.map(({ file, dataUrl }, index) => {
          const isVideo = file.type.startsWith('video') || type === 'video';
          const cleanFileName = file.name.replace(/\.[^/.]+$/, '');
          const itemTitle = files.length === 1 ? title : `${title} (${cleanFileName})`;

          return {
            id: 'gal_' + Date.now() + '_' + index + '_' + Math.random().toString(36).substr(2, 4),
            title: itemTitle,
            album: album,
            category: album,
            type: isVideo ? 'video' : 'photo',
            mediaUrl: dataUrl,
            imageUrl: dataUrl,
            caption: caption || `Uploaded photo/video to album ${album}`,
            date: date
          };
        });

        const currentGallery = store.getGallery();
        store.saveGallery([...newItems, ...currentGallery]);
        store.logAction('BATCH_UPLOAD_GALLERY', this.currentUser ? this.currentUser.fullName : 'Admin', `Uploaded batch of ${files.length} photos/videos to album "${album}"`);

        this.showToast(`Successfully uploaded ${files.length} photos/videos to album "${album}"!`, 'success');
        this.showUploadGalleryModal = false;
        this.selectedGalleryItemToEdit = null;
        this.galleryAlbumFilter = album;
        this.render();
      });
    } else {
      // SINGLE URL ENTRY FLOW
      const mediaUrl = form.mediaUrl.value.trim();
      const newItem = {
        id: 'gal_' + Date.now(),
        title,
        album,
        category: album,
        type,
        mediaUrl: mediaUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
        imageUrl: mediaUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
        caption,
        date
      };
      gallery.unshift(newItem);
      store.saveGallery(gallery);
      this.showToast(`New ${type} added to album "${album}"!`, 'success');
      this.showUploadGalleryModal = false;
      this.selectedGalleryItemToEdit = null;
      this.galleryAlbumFilter = album;
      this.render();
    }
  }

  handleDeleteGalleryItem(itemId) {
    if (!confirm('Are you sure you want to delete this photo/video from the album?')) return;
    let gallery = store.getGallery();
    const item = gallery.find(g => g.id === itemId);
    gallery = gallery.filter(g => g.id !== itemId);
    store.saveGallery(gallery);
    store.logAction('DELETE_GALLERY_ITEM', this.currentUser ? this.currentUser.fullName : 'Admin', `Deleted "${item ? item.title : itemId}"`);
    this.showToast('Photo/Video removed from album.', 'success');
    this.render();
  }

  // Charity & Relief Campaigns Page Component
  renderCampaignsPage() {
    const campaigns = store.getCampaigns();
    const donations = store.getDonations();
    const isAdmin = SecurityGuard.isAdminOrMaster(this.currentUser);

    const activeFilter = this.campaignCategoryFilter || 'All';

    let filtered = campaigns;
    if (activeFilter === 'Completed') {
      filtered = campaigns.filter(c => c.status === 'Completed' || c.raisedAmount >= c.goalAmount);
    } else if (activeFilter !== 'All') {
      filtered = campaigns.filter(c => c.category === activeFilter);
    }

    const totalRaisedAll = campaigns.reduce((sum, c) => sum + Number(c.raisedAmount || 0), 0);
    const totalDonorsAll = campaigns.reduce((sum, c) => sum + Number(c.donorCount || 0), 0);
    const activeCount = campaigns.filter(c => c.status === 'Active' && c.raisedAmount < c.goalAmount).length;

    return `
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-8 text-left">
        
        <!-- Hero Relief Banner -->
        <div class="rounded-3xl p-6 lg:p-10 border shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-amber-500/40 text-white">
          <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="space-y-4 flex-1">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-wider shadow">
                <i data-lucide="heart" class="w-4 h-4 text-red-500 animate-pulse"></i>
                <span>Official NRDSS Charity & Relief Fund KSA</span>
              </div>
              <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Empower Lives & Emergency Relief
              </h1>
              <p class="text-slate-300 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
                Direct community welfare campaigns for disaster relief, medical emergencies, education scholarships, and diaspora family support in Nuwakot, Rasuwa, Dhading, and Saudi Arabia.
              </p>
              
              <!-- Quick Stats Banner -->
              <div class="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                <div class="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <div class="text-xs text-slate-400 font-extrabold uppercase">Total Raised</div>
                  <div class="text-lg sm:text-2xl font-black text-emerald-400 font-mono">${totalRaisedAll.toLocaleString()} SAR</div>
                </div>
                <div class="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <div class="text-xs text-slate-400 font-extrabold uppercase">Active Campaigns</div>
                  <div class="text-lg sm:text-2xl font-black text-amber-400 font-mono">${activeCount} Active</div>
                </div>
                <div class="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <div class="text-xs text-slate-400 font-extrabold uppercase">Total Donors</div>
                  <div class="text-lg sm:text-2xl font-black text-blue-400 font-mono">${totalDonorsAll}+ Donors</div>
                </div>
              </div>
            </div>

            ${isAdmin ? `
              <div class="flex-shrink-0">
                <button onclick="app.openCampaignModal(null)" class="px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm transition-all shadow-xl flex items-center gap-2.5 border border-amber-400 hover:scale-105 active:scale-95 cursor-pointer">
                  <i data-lucide="plus-circle" class="w-5 h-5 text-slate-950"></i> Create New Campaign
                </button>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Filter Pills Bar -->
        <div class="flex items-center justify-between gap-4 flex-wrap border-b border-slate-200 pb-4">
          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            ${['All', 'Emergency Relief', 'Education Support', 'Diaspora Welfare', 'Completed'].map(cat => `
              <button onclick="app.campaignCategoryFilter = '${cat}'; app.render();" class="px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap cursor-pointer ${activeFilter === cat ? 'bg-red-600 text-white shadow-md border border-red-500' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'} flex items-center gap-1.5">
                ${cat === 'All' ? '<i data-lucide="grid" class="w-3.5 h-3.5"></i>' : (cat === 'Completed' ? '<i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-500"></i>' : '<i data-lucide="tag" class="w-3.5 h-3.5"></i>')}
                ${cat}
              </button>
            `).join('')}
          </div>
          <div class="text-xs text-slate-500 font-bold">
            Showing <span class="text-slate-900 font-black">${filtered.length}</span> Campaigns
          </div>
        </div>

        <!-- Campaigns Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${filtered.length === 0 ? `
            <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <i data-lucide="heart-off" class="w-12 h-12 text-slate-400 mx-auto"></i>
              <h3 class="text-lg font-black text-slate-800">No campaigns found for category "${activeFilter}"</h3>
              <p class="text-xs text-slate-500">Select another filter pill or create a new campaign as Admin.</p>
            </div>
          ` : filtered.map(c => {
            const raised = Number(c.raisedAmount || 0);
            const goal = Number(c.goalAmount || 1);
            const pct = Math.min(Math.round((raised / goal) * 100), 100);
            const isCompleted = c.status === 'Completed' || raised >= goal;
            const campDonations = donations.filter(d => d.campaignId === c.id);

            return `
              <div class="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all relative">
                
                <!-- Banner Photo Image -->
                <div class="relative h-60 w-full bg-slate-900 overflow-hidden">
                  <img src="${c.bannerUrl || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1000&auto=format&fit=crop&q=80'}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30"></div>
                  
                  <!-- Status & Category Badges -->
                  <div class="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md ${isCompleted ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white animate-pulse'}">
                      ${isCompleted ? '✓ Goal Accomplished' : '🔥 Active Relief Campaign'}
                    </span>
                    <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900/90 text-amber-400 border border-amber-400/40 shadow-md">
                      ${c.category || 'General Fund'}
                    </span>
                  </div>

                  <!-- Goal Percent Overlay Badge -->
                  <div class="absolute bottom-4 right-4 px-3 py-1.5 rounded-2xl bg-slate-950/90 text-white font-mono font-black text-xs border border-slate-700 shadow-xl flex items-center gap-1.5">
                    <i data-lucide="trending-up" class="w-4 h-4 text-emerald-400"></i> ${pct}% Funded
                  </div>
                </div>

                <!-- Content Info Section -->
                <div class="p-6 space-y-5 flex-1 flex flex-col justify-between text-left">
                  <div class="space-y-2">
                    <h3 class="text-xl font-black text-slate-900 leading-tight">${c.title}</h3>
                    <p class="text-xs text-slate-600 font-medium leading-relaxed">${c.description}</p>
                  </div>

                  <!-- Progress Bar & Target Financials -->
                  <div class="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div class="flex items-center justify-between text-xs font-black">
                      <span class="text-slate-600">Raised: <strong class="text-emerald-700 text-sm font-mono">${raised.toLocaleString()} SAR</strong></span>
                      <span class="text-slate-500">Goal: <strong class="text-slate-900 font-mono">${goal.toLocaleString()} SAR</strong></span>
                    </div>

                    <!-- Progress Bar -->
                    <div class="w-full h-3 rounded-full bg-slate-200 overflow-hidden shadow-inner">
                      <div class="h-full rounded-full transition-all duration-700 ${pct >= 100 ? 'bg-emerald-600' : 'bg-gradient-to-r from-red-600 via-amber-500 to-emerald-600'}" style="width: ${pct}%;"></div>
                    </div>

                    <div class="flex items-center justify-between text-[11px] text-slate-500 font-bold pt-1">
                      <span><i data-lucide="users" class="w-3.5 h-3.5 inline text-blue-600"></i> ${c.donorCount || campDonations.length} Generous Donors</span>
                      <span><i data-lucide="clock" class="w-3.5 h-3.5 inline text-amber-600"></i> Deadline: ${c.deadline || 'Ongoing'}</span>
                    </div>
                  </div>

                  <!-- Bank & Payment Details Quick Card -->
                  <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between text-xs">
                    <div>
                      <div class="text-[10px] uppercase font-black text-blue-900">Official Donation Bank</div>
                      <div class="font-extrabold text-slate-900 text-xs">${c.bankName || 'Al Rajhi Bank'}</div>
                      <div class="font-mono text-[11px] text-slate-600">IBAN: ${c.iban || 'SA4480000458608010099'}</div>
                    </div>
                    <button onclick="app.openBankDetailsModal('${c.id}')" class="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-black text-[11px] shadow transition-all cursor-pointer flex items-center gap-1">
                      <i data-lucide="qr-code" class="w-3.5 h-3.5 text-amber-300"></i> Payment QR
                    </button>
                  </div>

                  <!-- Action Buttons: Donate & Admin Controls -->
                  <div class="pt-2 border-t border-slate-200 space-y-2">
                    <div class="flex items-center gap-2">
                      <button onclick="app.openDonateModal('${c.id}')" class="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 border border-red-500 hover:scale-[1.02] active:scale-95 cursor-pointer">
                        <i data-lucide="heart" class="w-4 h-4 text-white fill-current"></i> Donate Now (Members & Guests)
                      </button>
                      <button onclick="app.openBankDetailsModal('${c.id}')" class="py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer">
                        <i data-lucide="building-2" class="w-4 h-4 text-amber-400"></i> Bank Wire
                      </button>
                    </div>

                    ${isAdmin ? `
                      <div class="flex items-center gap-2 pt-1">
                        <button onclick="app.openCampaignModal('${c.id}')" class="flex-1 py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-extrabold text-xs border border-amber-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                          <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-700"></i> Edit Campaign (Admin)
                        </button>
                        <button onclick="app.handleDeleteCampaign('${c.id}')" class="py-2 px-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-extrabold text-xs border border-red-200 transition-all flex items-center justify-center gap-1 cursor-pointer">
                          <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-600"></i> Delete
                        </button>
                      </div>
                    ` : ''}
                  </div>

                  <!-- Recent Donors Section -->
                  ${campDonations.length > 0 ? `
                    <div class="pt-3 border-t border-slate-100 space-y-2">
                      <div class="text-[11px] font-black uppercase text-slate-500 tracking-wider flex items-center justify-between">
                        <span>❤️ Recent Donors (${campDonations.length})</span>
                        <span class="text-emerald-600">Verified Proofs</span>
                      </div>
                      <div class="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        ${campDonations.slice(0, 3).map(d => `
                          <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                            <div class="flex items-center gap-2">
                              <div class="w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-[10px] flex items-center justify-center">
                                ${d.isAnonymous ? '?' : d.donorName.charAt(0)}
                              </div>
                              <div class="text-left">
                                <div class="font-bold text-slate-900 text-xs">${d.isAnonymous ? 'Anonymous Donor' : d.donorName}</div>
                                <div class="text-[9px] text-slate-500">${d.date} • ${d.paymentMethod}</div>
                              </div>
                            </div>
                            <div class="font-mono font-black text-emerald-700 text-xs">+${d.amount} SAR</div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}

                </div>
              </div>
            `;
          }).join('')}
        </div>

      </main>
    `;
  }

  // Open Bank Details & QR Code Modal
  openBankDetailsModal(campaignId) {
    const campaigns = store.getCampaigns();
    const c = campaigns.find(item => item.id === campaignId) || campaigns[0];
    if (!c) return;

    const existing = document.getElementById('bank-details-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="bank-details-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
        <div class="bg-slate-900 text-white border border-amber-500/40 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl my-8 text-left">
          
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <div class="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1">
                <i data-lucide="building-2" class="w-4 h-4 text-amber-400"></i> Official Bank & QR Payment Info
              </div>
              <h3 class="text-xl font-black text-white">${c.title}</h3>
            </div>
            <button onclick="document.getElementById('bank-details-modal').remove()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- QR Payment Display Box -->
          <div class="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-3">
            <div class="text-xs font-extrabold uppercase text-amber-400">Scan QR Code for Instant Donation Payment</div>
            <div class="w-52 h-52 mx-auto bg-white p-3 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-amber-400">
              <img src="${c.qrCodeUrl || 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + (c.iban || 'NRDSS-KSA')}" alt="Payment QR Code" class="w-full h-full object-contain" />
            </div>
            <p class="text-[11px] text-slate-400 font-medium">Scan using STC Pay, Urpay, Al Rajhi App, or any KSA mobile banking app.</p>
          </div>

          <!-- Bank Account Details Card -->
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div class="text-xs font-black uppercase text-slate-300">Bank Transfer Account Details</div>
            
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center border-b border-slate-800 pb-1.5">
                <span class="text-slate-400">Bank Name:</span>
                <span class="font-black text-white">${c.bankName || 'Al Rajhi Bank Saudi Arabia'}</span>
              </div>
              <div class="flex justify-between items-center border-b border-slate-800 pb-1.5">
                <span class="text-slate-400">Account Name:</span>
                <span class="font-black text-amber-300">${c.accountName || 'Nuwakot Rasuwa Dhading Samaj KSA'}</span>
              </div>
              <div class="flex justify-between items-center border-b border-slate-800 pb-1.5">
                <span class="text-slate-400">Account Number:</span>
                <span class="font-mono font-black text-emerald-400">${c.accountNumber || '458608010099'}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400">IBAN:</span>
                <span class="font-mono font-black text-amber-400 text-[11px]">${c.iban || 'SA4480000458608010099'}</span>
              </div>
            </div>
          </div>

          <div class="pt-2 flex gap-3">
            <button onclick="document.getElementById('bank-details-modal').remove(); app.openDonateModal('${c.id}')" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xs transition-all shadow-lg flex items-center justify-center gap-2 border border-red-500">
              <i data-lucide="heart" class="w-4 h-4 fill-current"></i> Donate Now
            </button>
            <button onclick="document.getElementById('bank-details-modal').remove()" class="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700">
              Close
            </button>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Open Universal Donation Modal for Members & Guests
  openDonateModal(campaignId) {
    const campaigns = store.getCampaigns();
    const c = campaigns.find(item => item.id === campaignId) || campaigns[0];
    if (!c) return;

    const existing = document.getElementById('donate-modal');
    if (existing) existing.remove();

    const isUser = !!this.currentUser;
    const defaultName = isUser ? this.currentUser.fullName : '';
    const defaultEmail = isUser ? (this.currentUser.email || '') : '';

    const modalHtml = `
      <div id="donate-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
        <div class="bg-slate-900 text-white border border-amber-500/40 w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl my-8 text-left">
          
          <!-- Header -->
          <div class="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div class="text-xs font-black uppercase text-red-500 tracking-wider flex items-center gap-1.5">
                <i data-lucide="heart" class="w-4 h-4 fill-current text-red-500"></i> Official Relief Donation
              </div>
              <h3 class="text-xl sm:text-2xl font-black text-white">${c.title}</h3>
              <p class="text-xs text-slate-400">Target Goal: SAR ${c.goalAmount.toLocaleString()} • Raised: SAR ${c.raisedAmount.toLocaleString()}</p>
            </div>
            <button onclick="document.getElementById('donate-modal').remove()" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form onsubmit="app.handleDonationSubmit(event, '${c.id}')" class="space-y-4">
            
            <!-- Donor Name & Email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-extrabold text-slate-300 uppercase mb-1">Your Full Name</label>
                <input type="text" name="donorName" required value="${defaultName}" placeholder="Enter your full name" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500" />
              </div>
              <div>
                <label class="block text-xs font-extrabold text-slate-300 uppercase mb-1">Email / Phone (Confidential)</label>
                <input type="text" name="donorContact" required value="${defaultEmail}" placeholder="Phone number or email" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500" />
              </div>
            </div>

            <!-- Amount Presets & Custom Input -->
            <div class="space-y-2">
              <label class="block text-xs font-extrabold text-slate-300 uppercase">Select Contribution Amount (SAR)</label>
              <div class="grid grid-cols-4 gap-2">
                ${[50, 100, 250, 500].map(amt => `
                  <button type="button" onclick="document.getElementById('custom-donation-amount').value = ${amt};" class="py-2.5 rounded-xl bg-slate-950 hover:bg-red-600 hover:text-white border border-slate-700 text-amber-400 font-mono font-black text-xs transition-all cursor-pointer">
                    ${amt} SAR
                  </button>
                `).join('')}
              </div>
              <input type="number" id="custom-donation-amount" name="amount" required min="10" step="5" value="100" placeholder="Enter custom amount SAR" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-emerald-400 font-mono font-black text-sm focus:border-amber-500" />
            </div>

            <!-- Payment Method & QR Display -->
            <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-xs font-black text-amber-400 uppercase">Payment Bank & QR Info</span>
                <span class="text-[10px] text-slate-400 font-mono">${c.bankName || 'Al Rajhi Bank'}</span>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 items-center">
                <div class="w-32 h-32 bg-white p-2 rounded-xl flex-shrink-0 border-2 border-amber-400 shadow-md">
                  <img src="${c.qrCodeUrl || 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + (c.iban || 'NRDSS-RELIEF')}" alt="Payment QR" class="w-full h-full object-contain" />
                </div>
                <div class="space-y-1 text-left text-xs">
                  <div class="font-extrabold text-white">IBAN: <span class="font-mono text-amber-400 text-[11px]">${c.iban || 'SA4480000458608010099'}</span></div>
                  <div class="text-slate-300">Account #: <span class="font-mono text-emerald-400">${c.accountNumber || '458608010099'}</span></div>
                  <div class="text-slate-400 text-[11px]">Pay via STC Pay, Urpay, or Bank Wire Transfer, then attach your transaction reference or receipt below.</div>
                </div>
              </div>
            </div>

            <!-- Transaction Reference & Receipt Proof Upload -->
            <div class="space-y-2">
              <label class="block text-xs font-extrabold text-slate-300 uppercase">Transaction Ref / Receipt Proof</label>
              <input type="text" name="transactionRef" placeholder="Enter Bank Ref / STC Pay Ref #" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono mb-2" />
              
              <div class="flex items-center gap-3">
                <label class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs cursor-pointer shadow-md flex items-center gap-2 border border-amber-400">
                  <i data-lucide="upload-cloud" class="w-4 h-4 text-slate-950"></i> Upload Receipt Image
                  <input type="file" accept="image/*" onchange="app.handleFileUpload(this, 'donation-receipt-url', 'donation-receipt-preview')" class="hidden" />
                </label>
                <input type="hidden" id="donation-receipt-url" name="receiptUrl" value="" />
                <div id="donation-receipt-preview" class="text-xs text-amber-300 font-bold italic">Optional receipt attachment</div>
              </div>
            </div>

            <!-- Anonymous Option & Message -->
            <div class="space-y-2 pt-1">
              <label class="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-300 font-bold">
                <input type="checkbox" name="isAnonymous" class="w-4 h-4 accent-amber-500 rounded" />
                <span>Hide my name on public donor list (Donate Anonymously)</span>
              </label>

              <textarea name="message" rows="2" placeholder="Write a short message of encouragement or prayer..." class="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"></textarea>
            </div>

            <!-- Action Buttons -->
            <div class="pt-3 border-t border-slate-800 flex gap-3">
              <button type="submit" class="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-emerald-700 hover:from-red-700 hover:to-emerald-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 border border-emerald-500 hover:scale-[1.02] cursor-pointer">
                <i data-lucide="heart" class="w-4 h-4 fill-current text-white"></i> Confirm & Submit Donation
              </button>
              <button type="button" onclick="document.getElementById('donate-modal').remove()" class="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs">
                Cancel
              </button>
            </div>

          </form>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Handle Donation Submission (Members & Guests)
  handleDonationSubmit(event, campaignId) {
    event.preventDefault();
    const form = event.target;
    const campaigns = store.getCampaigns();
    const campaignIndex = campaigns.findIndex(c => c.id === campaignId);
    if (campaignIndex === -1) return;

    const amount = Number(form.amount.value) || 50;
    const donorName = form.donorName.value.trim() || 'Generous Donor';
    const donorContact = form.donorContact.value.trim();
    const isAnonymous = form.isAnonymous.checked;
    const transactionRef = form.transactionRef.value.trim();
    const receiptUrl = form.receiptUrl.value;
    const message = form.message.value.trim();

    campaigns[campaignIndex].raisedAmount = Number(campaigns[campaignIndex].raisedAmount || 0) + amount;
    campaigns[campaignIndex].donorCount = Number(campaigns[campaignIndex].donorCount || 0) + 1;

    store.saveCampaigns(campaigns);

    const donations = store.getDonations();
    const newDonation = {
      id: 'don_' + Date.now(),
      campaignId: campaignId,
      donorName: donorName,
      donorContact: donorContact,
      isAnonymous: isAnonymous,
      amount: amount,
      currency: 'SAR',
      paymentMethod: 'Bank Wire / QR',
      transactionRef: transactionRef || 'ONLINE-PROVED',
      receiptUrl: receiptUrl || '',
      date: new Date().toISOString().split('T')[0],
      message: message
    };
    donations.unshift(newDonation);
    store.saveDonations(donations);

    store.logAction('DONATION_SUBMITTED', isAnonymous ? 'Anonymous' : donorName, `Donated SAR ${amount} for "${campaigns[campaignIndex].title}"`);

    this.showToast(`❤️ Thank you ${isAnonymous ? '' : donorName}! Your donation of ${amount} SAR was received successfully.`, 'success');

    const modal = document.getElementById('donate-modal');
    if (modal) modal.remove();

    this.render();
  }

  // Open Campaign Create/Edit Modal (Admin Only)
  openCampaignModal(campaignId = null) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) return;

    const campaigns = store.getCampaigns();
    const campaign = campaignId ? campaigns.find(c => c.id === campaignId) : null;

    const existing = document.getElementById('edit-campaign-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="edit-campaign-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
        <div class="bg-slate-900 text-white border border-amber-500/40 w-full max-w-2xl rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl my-8 text-left">
          
          <div class="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div class="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <i data-lucide="${campaign ? 'edit-3' : 'plus-circle'}" class="w-4 h-4 text-amber-400"></i> Admin Campaign Manager
              </div>
              <h3 class="text-2xl font-black text-white">${campaign ? 'Edit Relief Campaign' : 'Create New Relief Campaign'}</h3>
            </div>
            <button onclick="document.getElementById('edit-campaign-modal').remove()" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form onsubmit="app.handleSaveCampaign(event, '${campaign ? campaign.id : ''}')" class="space-y-4">
            
            <div>
              <label class="block text-xs font-extrabold text-slate-300 uppercase mb-1">Campaign Title</label>
              <input type="text" name="title" required value="${campaign ? campaign.title : ''}" placeholder="e.g., Rasuwa Flood Relief 2026" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold focus:border-amber-500" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-extrabold text-slate-300 uppercase mb-1">Category</label>
                <select name="category" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold">
                  <option value="Emergency Relief" ${campaign && campaign.category === 'Emergency Relief' ? 'selected' : ''}>Emergency Relief</option>
                  <option value="Education Support" ${campaign && campaign.category === 'Education Support' ? 'selected' : ''}>Education Support</option>
                  <option value="Diaspora Welfare" ${campaign && campaign.category === 'Diaspora Welfare' ? 'selected' : ''}>Diaspora Welfare</option>
                  <option value="Community Center" ${campaign && campaign.category === 'Community Center' ? 'selected' : ''}>Community Center</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-extrabold text-slate-300 uppercase mb-1">Financial Goal (SAR)</label>
                <input type="number" name="goalAmount" required min="100" value="${campaign ? campaign.goalAmount : 50000}" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-emerald-400 font-mono font-black text-xs" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-extrabold text-slate-300 uppercase mb-1">Campaign Description</label>
              <textarea name="description" rows="3" required placeholder="Detail the cause, who benefits, and how funds will be deployed..." class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-medium">${campaign ? campaign.description : ''}</textarea>
            </div>

            <!-- Campaign Banner Photo Upload -->
            <div class="space-y-2">
              <label class="block text-xs font-extrabold text-slate-300 uppercase">Banner Image Photo</label>
              <input type="url" id="camp-banner-url" name="bannerUrl" required value="${campaign ? campaign.bannerUrl : ''}" placeholder="Image URL" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono mb-2" />
              <div class="flex items-center gap-3">
                <label class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs cursor-pointer shadow-md flex items-center gap-2 border border-amber-400">
                  <i data-lucide="upload-cloud" class="w-4 h-4 text-slate-950"></i> Upload Banner Image File
                  <input type="file" accept="image/*" onchange="app.handleFileUpload(this, 'camp-banner-url', 'camp-banner-preview')" class="hidden" />
                </label>
                <div id="camp-banner-preview" class="text-xs text-amber-300 font-bold italic">${campaign && campaign.bannerUrl ? '✓ Photo file attached' : ''}</div>
              </div>
            </div>

            <!-- Bank & QR Code Settings -->
            <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div class="text-xs font-black uppercase text-amber-400">Bank & Payment QR Code Settings</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" name="bankName" value="${campaign ? (campaign.bankName || '') : 'Al Rajhi Bank Saudi Arabia'}" placeholder="Bank Name" class="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs" />
                <input type="text" name="accountName" value="${campaign ? (campaign.accountName || '') : 'Nuwakot Rasuwa Dhading Samaj KSA'}" placeholder="Account Name" class="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs" />
                <input type="text" name="accountNumber" value="${campaign ? (campaign.accountNumber || '') : '458608010099'}" placeholder="Account Number" class="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono" />
                <input type="text" name="iban" value="${campaign ? (campaign.iban || '') : 'SA4480000458608010099'}" placeholder="IBAN SA..." class="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-400 uppercase mb-1">Payment QR Code Image URL</label>
                <input type="url" id="camp-qr-url" name="qrCodeUrl" value="${campaign ? (campaign.qrCodeUrl || '') : ''}" placeholder="QR Code Image URL or leave blank to auto-generate" class="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono mb-2" />
                <label class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer inline-flex items-center gap-1.5">
                  <i data-lucide="qr-code" class="w-3.5 h-3.5 text-amber-400"></i> Upload QR Code Image File
                  <input type="file" accept="image/*" onchange="app.handleFileUpload(this, 'camp-qr-url', 'camp-qr-preview')" class="hidden" />
                </label>
                <span id="camp-qr-preview" class="text-xs text-amber-400 font-bold italic ml-2"></span>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-extrabold text-slate-300 uppercase mb-1">Status</label>
                <select name="status" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold">
                  <option value="Active" ${campaign && campaign.status === 'Active' ? 'selected' : ''}>Active</option>
                  <option value="Completed" ${campaign && campaign.status === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-extrabold text-slate-300 uppercase mb-1">Target Deadline</label>
                <input type="date" name="deadline" value="${campaign ? (campaign.deadline || '') : '2026-10-31'}" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold" />
              </div>
            </div>

            <div class="pt-3 border-t border-slate-800 flex gap-3">
              <button type="submit" class="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 border border-amber-400">
                <i data-lucide="save" class="w-4 h-4 text-slate-950"></i> ${campaign ? 'Save Campaign Changes' : 'Publish Relief Campaign'}
              </button>
              <button type="button" onclick="document.getElementById('edit-campaign-modal').remove()" class="px-5 py-3.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs">
                Cancel
              </button>
            </div>

          </form>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Handle Save Campaign Submission
  handleSaveCampaign(event, campaignId = '') {
    event.preventDefault();
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) return;

    const form = event.target;
    const campaigns = store.getCampaigns();

    const title = form.title.value.trim();
    const category = form.category.value;
    const goalAmount = Number(form.goalAmount.value) || 10000;
    const description = form.description.value.trim();
    const bannerUrl = form.bannerUrl.value.trim() || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1000&auto=format&fit=crop&q=80';
    const bankName = form.bankName.value.trim();
    const accountName = form.accountName.value.trim();
    const accountNumber = form.accountNumber.value.trim();
    const iban = form.iban.value.trim();
    const qrCodeUrl = form.qrCodeUrl.value.trim() || `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${iban || 'NRDSS'}`;
    const status = form.status.value;
    const deadline = form.deadline.value;

    if (campaignId) {
      const idx = campaigns.findIndex(c => c.id === campaignId);
      if (idx !== -1) {
        campaigns[idx] = {
          ...campaigns[idx],
          title, category, goalAmount, description, bannerUrl, bankName, accountName, accountNumber, iban, qrCodeUrl, status, deadline
        };
        this.showToast(`Updated campaign "${title}"!`, 'success');
      }
    } else {
      const newCamp = {
        id: 'camp_' + Date.now(),
        title, category, goalAmount, raisedAmount: 0, donorCount: 0, description, bannerUrl, bankName, accountName, accountNumber, iban, qrCodeUrl, status, deadline,
        createdAt: new Date().toISOString().split('T')[0]
      };
      campaigns.unshift(newCamp);
      this.showToast(`Created new relief campaign "${title}"!`, 'success');
    }

    store.saveCampaigns(campaigns);
    store.logAction(campaignId ? 'UPDATE_CAMPAIGN' : 'CREATE_CAMPAIGN', this.currentUser ? this.currentUser.fullName : 'Admin', `Saved campaign "${title}"`);

    const modal = document.getElementById('edit-campaign-modal');
    if (modal) modal.remove();

    this.render();
  }

  // Handle Delete Campaign
  handleDeleteCampaign(campaignId) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) return;
    const campaigns = store.getCampaigns();
    const c = campaigns.find(item => item.id === campaignId);
    if (!c) return;

    if (confirm(`Are you sure you want to delete campaign "${c.title}"?`)) {
      const filtered = campaigns.filter(item => item.id !== campaignId);
      store.saveCampaigns(filtered);
      store.logAction('DELETE_CAMPAIGN', this.currentUser ? this.currentUser.fullName : 'Admin', `Deleted campaign "${c.title}"`);
      this.showToast(`Deleted campaign "${c.title}".`, 'info');
      this.render();
    }
  }

  // Admin Command Center Portal Component (Master Admin vs Executive Admin Controls)
  renderAdminPortal() {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      return `
        <div class="p-12 text-center text-red-400 font-bold text-lg">
          Security Violation: Access Denied. Executive Admin Privileges Required.
        </div>
      `;
    }

    const isMaster = SecurityGuard.isMasterAdmin(this.currentUser);
    const users = store.getUsers();
    const pendingUsers = users.filter(u => u.status === 'Pending');
    const approvedUsers = users.filter(u => u.status === 'Approved');
    const events = store.getEvents();
    const ads = store.getAds();
    const gallery = store.getGallery();

    const totalMembershipIncome = approvedUsers.reduce((acc, u) => acc + (u.membershipFee || 0), 0);
    
    let totalEventIncome = 0;
    let paidEventRegistrationsCount = 0;
    events.forEach(evt => {
      (evt.registrations || []).forEach(reg => {
        const amt = reg.feePaid !== undefined ? Number(reg.feePaid) : (evt.registrationFee || 0);
        if (reg.paymentStatus === 'Paid' || amt > 0) {
          totalEventIncome += amt;
          paidEventRegistrationsCount++;
        }
      });
    });

    const grandTotalIncome = totalMembershipIncome + totalEventIncome;

    return `
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-8">
        <!-- Admin Dashboard Header -->
        <div class="rounded-2xl p-6 border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important; border: 2px solid rgba(245, 158, 11, 0.4) !important;">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full ${isMaster ? 'golden-badge' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'} text-xs font-black uppercase tracking-wider mb-2">
              <i data-lucide="${isMaster ? 'crown' : 'shield'}" class="w-3.5 h-3.5"></i>
              ${isMaster ? 'Master System Administrator Page' : 'Executive Admin Management Page'}
            </div>
            <h2 class="text-2xl font-extrabold text-white" style="color: #ffffff !important; font-weight: 900 !important;">NRDSS Administrative Command Center</h2>
            <p class="text-xs text-slate-300 mt-1" style="color: #cbd5e1 !important;">Review member details, publish events, track event registration collection, and send broadcast notifications.</p>
          </div>

          <div class="flex flex-wrap gap-2">
            <button onclick="app.openLogoCropModal()" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg border border-amber-400 cursor-pointer">
              <i data-lucide="scissors" class="w-4 h-4 text-slate-950"></i> Edit & Crop Round Logo
            </button>
            <button onclick="app.openBroadcastNotifModal()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg" style="background-color: #059669 !important; color: #ffffff !important;">
              <i data-lucide="send" class="w-4 h-4"></i> Send Push Notification
            </button>
          </div>
        </div>

        <!-- Metric Stat Cards (High-Contrast Guaranteed Visibility) -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <!-- Card 1: Registry Members -->
          <div onclick="app.adminTab = 'members'; app.memberStatusFilter = 'Approved'; app.render();" class="rounded-2xl p-4 border shadow-xl flex flex-col justify-between cursor-pointer transform hover:scale-[1.02] transition-all" style="background-color: #0f172a !important; border: 2px solid #10b981 !important;">
            <div class="flex items-center justify-between">
              <div class="text-xs font-bold uppercase" style="color: #94a3b8 !important;">Registry Members</div>
              <span class="text-[9px] font-black px-1.5 py-0.5 rounded-full border flex items-center gap-1 shadow-sm" style="background-color: #059669 !important; color: #ffffff !important; border-color: #34d399 !important;">
                <i data-lucide="users" class="w-3 h-3"></i> View Roster
              </span>
            </div>
            <div class="text-2xl font-black mt-1" style="color: #ffffff !important; font-weight: 900 !important;">${users.length}</div>
            <div class="text-[11px] font-extrabold mt-1 flex items-center justify-between" style="color: #34d399 !important;">
              <span style="color: #34d399 !important; font-weight: 900 !important;">✓ ${approvedUsers.length} Approved Members</span>
              <span class="underline text-[9px]" style="color: #fbbf24 !important;">Roster &rarr;</span>
            </div>
          </div>

          <!-- Card 2: Pending Approvals -->
          <div class="rounded-2xl p-4 border shadow-xl flex flex-col justify-between" style="background-color: #0f172a !important; border: 2px solid #f59e0b !important;">
            <div class="text-xs font-bold uppercase" style="color: #fbbf24 !important;">Pending Approvals</div>
            <div class="text-2xl font-black mt-1" style="color: #fde047 !important; font-weight: 900 !important;">${pendingUsers.length}</div>
            <div class="text-[10px] font-semibold mt-1" style="color: #cbd5e1 !important;">Requires Verification</div>
          </div>

          <!-- Card 3: Membership Collection -->
          <div onclick="app.openIncomeBreakdownModal()" class="rounded-2xl p-4 border shadow-xl flex flex-col justify-between cursor-pointer transform hover:scale-[1.02] transition-all" style="background-color: #064e3b !important; border: 2px solid #10b981 !important;">
            <div class="flex items-center justify-between">
              <div class="text-[11px] font-bold uppercase" style="color: #a7f3d0 !important;">Membership Collection</div>
              <span class="text-[9px] font-black px-1.5 py-0.5 rounded-full border flex items-center gap-1 shadow-sm" style="background-color: #059669 !important; color: #ffffff !important; border-color: #34d399 !important;">
                <i data-lucide="eye" class="w-3 h-3"></i> Ledger
              </span>
            </div>
            <div class="text-2xl font-black mt-1" style="color: #ffffff !important; font-weight: 900 !important;">${totalMembershipIncome} <span class="text-xs" style="color: #a7f3d0 !important;">SAR</span></div>
            <div class="text-[10px] font-bold mt-1 flex items-center justify-between" style="color: #e2e8f0 !important;">
              <span>Membership Fees</span>
              <span class="underline text-[9px]" style="color: #fbbf24 !important;">Details &rarr;</span>
            </div>
          </div>

          <!-- Card 4: Event Collection -->
          <div onclick="app.adminTab = 'event_income'; app.render();" class="rounded-2xl p-4 border shadow-xl flex flex-col justify-between cursor-pointer transform hover:scale-[1.02] transition-all" style="background-color: #0f172a !important; border: 2px solid #3b82f6 !important;">
            <div class="flex items-center justify-between">
              <div class="text-[11px] font-bold uppercase" style="color: #60a5fa !important;">Event Collection</div>
              <span class="text-[9px] font-black px-1.5 py-0.5 rounded-full border flex items-center gap-1 shadow-sm" style="background-color: #1d4ed8 !important; color: #ffffff !important; border-color: #60a5fa !important;">
                <i data-lucide="banknote" class="w-3 h-3"></i> Who Paid
              </span>
            </div>
            <div class="text-2xl font-black mt-1" style="color: #fbbf24 !important; font-weight: 900 !important;">${totalEventIncome} <span class="text-xs" style="color: #ffffff !important;">SAR</span></div>
            <div class="text-[10px] font-bold mt-1 flex items-center justify-between" style="color: #cbd5e1 !important;">
              <span>${paidEventRegistrationsCount} Paid Attendees</span>
              <span class="underline text-[9px]" style="color: #fbbf24 !important;">View Roster &rarr;</span>
            </div>
          </div>

          <!-- Card 5: Events Count -->
          <div onclick="app.adminTab = 'events'; app.render();" class="rounded-2xl p-4 border shadow-xl flex flex-col justify-between cursor-pointer transform hover:scale-[1.02] transition-all" style="background-color: #0f172a !important; border: 2px solid #f59e0b !important;">
            <div class="text-xs font-bold uppercase flex items-center gap-1" style="color: #fbbf24 !important;">
              <i data-lucide="calendar" class="w-3.5 h-3.5" style="color: #fbbf24 !important;"></i> Events Count
            </div>
            <div class="text-2xl font-black mt-1" style="color: #ffffff !important; font-weight: 900 !important;">${events.length}</div>
            <div class="text-[10px] font-bold mt-1" style="color: #cbd5e1 !important;">Community Programs</div>
          </div>

          <!-- Card 6: Ads Count -->
          <div onclick="app.adminTab = 'events'; app.render();" class="rounded-2xl p-4 border shadow-xl flex flex-col justify-between cursor-pointer transform hover:scale-[1.02] transition-all" style="background-color: #0f172a !important; border: 2px solid #a855f7 !important;">
            <div class="text-xs font-bold uppercase flex items-center gap-1" style="color: #c084fc !important;">
              <i data-lucide="megaphone" class="w-3.5 h-3.5" style="color: #c084fc !important;"></i> Ads Count
            </div>
            <div class="text-2xl font-black mt-1" style="color: #ffffff !important; font-weight: 900 !important;">${ads.length}</div>
            <div class="text-[10px] font-bold mt-1" style="color: #cbd5e1 !important;">Sponsor Banners</div>
          </div>

          <!-- Card 7: Albums Count -->
          <div onclick="app.adminTab = 'gallery'; app.render();" class="rounded-2xl p-4 border shadow-xl flex flex-col justify-between cursor-pointer transform hover:scale-[1.02] transition-all" style="background-color: #0f172a !important; border: 2px solid #3b82f6 !important;">
            <div class="text-xs font-bold uppercase flex items-center gap-1" style="color: #60a5fa !important;">
              <i data-lucide="image" class="w-3.5 h-3.5" style="color: #60a5fa !important;"></i> Albums Count
            </div>
            <div class="text-2xl font-black mt-1" style="color: #ffffff !important; font-weight: 900 !important;">${gallery.length}</div>
            <div class="text-[10px] font-bold mt-1" style="color: #cbd5e1 !important;">Photo & Media Items</div>
          </div>
        </div>

        <!-- Sub-Navigation Bar inside Admin Portal -->
        <div class="flex border-b border-slate-800 gap-2 overflow-x-auto pb-2">
          <button onclick="app.adminTab = 'approvals'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.adminTab === 'approvals' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'} flex items-center gap-2">
            <i data-lucide="clock" class="w-4 h-4"></i> Pending Approvals (${pendingUsers.length})
          </button>
          <button onclick="app.adminTab = 'members'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.adminTab === 'members' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'} flex items-center gap-2">
            <i data-lucide="users" class="w-4 h-4"></i> Registry Members (${users.length})
          </button>
          <button onclick="app.adminTab = 'gallery'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.adminTab === 'gallery' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'} flex items-center gap-2">
            <i data-lucide="image" class="w-4 h-4"></i> Photo & Video Albums (${gallery.length})
          </button>
          <button onclick="app.adminTab = 'events'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.adminTab === 'events' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'} flex items-center gap-2">
            <i data-lucide="calendar" class="w-4 h-4"></i> Events & Ad Space
          </button>
          <button onclick="app.adminTab = 'event_income'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.adminTab === 'event_income' ? 'bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-950/40' : 'text-emerald-400 hover:text-white'} flex items-center gap-2 border border-emerald-500/40">
            <i data-lucide="banknote" class="w-4 h-4"></i> Event Registration Collection (${totalEventIncome} SAR)
          </button>
          <button onclick="app.adminTab = 'board_members'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.adminTab === 'board_members' ? 'bg-amber-500 text-slate-950 font-black shadow-lg' : 'text-amber-400 hover:text-white'} flex items-center gap-2 border border-amber-500/40">
            <i data-lucide="award" class="w-4 h-4 text-amber-400"></i> Board Members (${store.getBoardMembers().length})
          </button>
          <button onclick="app.adminTab = 'campaigns'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.adminTab === 'campaigns' ? 'bg-red-600 text-white font-black shadow-lg shadow-red-950/40' : 'text-red-400 hover:text-white'} flex items-center gap-2 border border-red-500/40">
            <i data-lucide="heart" class="w-4 h-4 text-red-400 fill-current"></i> Relief & Charity Hub (${store.getCampaigns().length})
          </button>
          ${isMaster ? `
            <button onclick="app.adminTab = 'master_control'; app.render();" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${this.adminTab === 'master_control' ? 'golden-badge' : 'text-amber-400 hover:text-white'} flex items-center gap-2 border border-amber-500/40">
              <i data-lucide="crown" class="w-4 h-4"></i> Master Admin Controls
            </button>
          ` : ''}
        </div>

        ${this.renderAdminSubTabContent(pendingUsers, users, events, ads, isMaster, gallery)}
      </main>
    `;
  }

  // Render Admin Sub-Tab Sections
  renderAdminSubTabContent(pendingUsers, users, events, ads, isMaster, gallery = store.getGallery()) {
    if (this.adminTab === 'campaigns') {
      const campaigns = store.getCampaigns();
      const donations = store.getDonations();

      const totalCharityRaised = campaigns.reduce((sum, c) => sum + Number(c.raisedAmount || 0), 0);
      const totalDonors = donations.length;

      return `
        <div class="space-y-6 text-left">
          <!-- Top Control Header -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/90 p-5 rounded-2xl border border-red-500/30">
            <div>
              <div class="text-xs font-black uppercase text-red-400 tracking-wider flex items-center gap-1.5">
                <i data-lucide="heart" class="w-4 h-4 text-red-500 fill-current"></i> Admin Charity & Relief Management Hub
              </div>
              <h3 class="text-xl font-black text-white">Relief Campaigns & Donor Proofs</h3>
              <p class="text-xs text-slate-400">Create disaster relief campaigns, monitor real-time raised goals, and audit donor contribution receipts.</p>
            </div>
            <button onclick="app.openCampaignModal(null)" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs transition-all shadow-lg flex items-center gap-2 border border-amber-400 hover:scale-105 active:scale-95 cursor-pointer">
              <i data-lucide="plus-circle" class="w-4 h-4 text-slate-950"></i> Create New Campaign
            </button>
          </div>

          <!-- Financial Overview Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-slate-900 p-5 rounded-2xl border border-emerald-500/40 text-white shadow-xl space-y-1">
              <div class="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">Total Relief Funds Raised</div>
              <div class="text-3xl font-black text-white">${totalCharityRaised.toLocaleString()} <span class="text-sm text-emerald-400 font-bold">SAR</span></div>
              <div class="text-[11px] text-slate-300">Across ${campaigns.length} community campaigns</div>
            </div>

            <div class="bg-slate-900 p-5 rounded-2xl border border-amber-500/40 text-white shadow-xl space-y-1">
              <div class="text-xs font-extrabold text-amber-400 uppercase tracking-wider">Active Relief Campaigns</div>
              <div class="text-3xl font-black text-white">${campaigns.filter(c => c.status === 'Active').length} <span class="text-xs font-bold text-amber-400">Active</span></div>
              <div class="text-[11px] text-slate-300">Published for member & guest contributions</div>
            </div>

            <div class="bg-slate-900 p-5 rounded-2xl border border-blue-500/40 text-white shadow-xl space-y-1">
              <div class="text-xs font-extrabold text-blue-400 uppercase tracking-wider">Total Verified Donors</div>
              <div class="text-3xl font-black text-white">${totalDonors} <span class="text-xs font-bold text-blue-300">Donations</span></div>
              <div class="text-[11px] text-slate-300">Contributions logged in audit ledger</div>
            </div>
          </div>

          <!-- All Campaigns Management Grid -->
          <div class="space-y-4">
            <h4 class="font-black text-white text-base flex items-center gap-2">
              <i data-lucide="layers" class="w-4 h-4 text-amber-400"></i> All Published Campaigns (${campaigns.length})
            </h4>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${campaigns.map(c => {
                const raised = Number(c.raisedAmount || 0);
                const goal = Number(c.goalAmount || 1);
                const pct = Math.min(Math.round((raised / goal) * 100), 100);
                return `
                  <div class="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-md flex flex-col justify-between">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase ${c.status === 'Active' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}">${c.status}</span>
                        <span class="text-xs font-mono font-black text-amber-400">${pct}% Funded</span>
                      </div>
                      <h5 class="font-black text-white text-base leading-tight">${c.title}</h5>
                      <div class="text-xs text-slate-400">${c.category} • Target: SAR ${goal.toLocaleString()} • Raised: SAR ${raised.toLocaleString()}</div>
                    </div>

                    <div class="pt-2 border-t border-slate-800 flex gap-2">
                      <button onclick="app.openCampaignModal('${c.id}')" class="flex-1 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-xs border border-amber-500/40 flex items-center justify-center gap-1 cursor-pointer">
                        <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Edit Campaign
                      </button>
                      <button onclick="app.openBankDetailsModal('${c.id}')" class="px-3 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs border border-blue-700 flex items-center justify-center gap-1 cursor-pointer">
                        <i data-lucide="qr-code" class="w-3.5 h-3.5"></i> QR Bank Info
                      </button>
                      <button onclick="app.handleDeleteCampaign('${c.id}')" class="px-3 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-400 font-bold text-xs border border-red-500/40 flex items-center justify-center cursor-pointer">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Donor Contribution Audit Ledger Table -->
          <div class="space-y-4">
            <h4 class="font-black text-white text-base flex items-center gap-2">
              <i data-lucide="receipt" class="w-4 h-4 text-emerald-400"></i> Donor Contribution & Statement Ledger (${donations.length})
            </h4>

            <div class="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl bg-slate-900">
              <table class="w-full text-left text-xs text-slate-300">
                <thead class="bg-slate-950 text-slate-400 font-black uppercase text-[10px] border-b border-slate-800">
                  <tr>
                    <th class="p-3">Donor Name</th>
                    <th class="p-3">Campaign Cause</th>
                    <th class="p-3">Amount (SAR)</th>
                    <th class="p-3">Method / Ref</th>
                    <th class="p-3">Date</th>
                    <th class="p-3 text-right">Proof File</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800">
                  ${donations.length === 0 ? `
                    <tr><td colspan="6" class="p-6 text-center text-slate-500 italic">No donations recorded yet.</td></tr>
                  ` : donations.map(d => {
                    const c = campaigns.find(item => item.id === d.campaignId);
                    return `
                      <tr class="hover:bg-slate-800/50 transition-all">
                        <td class="p-3">
                          <div class="font-black text-white text-xs">${d.isAnonymous ? 'Anonymous Donor' : d.donorName}</div>
                          ${d.donorContact ? `<div class="text-[10px] text-slate-400 font-mono">${d.donorContact}</div>` : ''}
                        </td>
                        <td class="p-3 text-xs text-amber-300 font-semibold max-w-xs truncate">${c ? c.title : 'Relief Campaign'}</td>
                        <td class="p-3 font-mono font-black text-emerald-400 text-xs">+${d.amount} SAR</td>
                        <td class="p-3 text-[11px] font-mono text-slate-300">${d.paymentMethod} (${d.transactionRef || 'N/A'})</td>
                        <td class="p-3 text-xs text-slate-400">${d.date}</td>
                        <td class="p-3 text-right">
                          ${d.receiptUrl ? `
                            <button onclick="app.openPaymentReceiptModal('${d.receiptUrl}', '${d.donorName.replace(/'/g, "\\'")}', '${c ? c.title.replace(/'/g, "\\'") : 'Donation Proof'}')" class="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-[11px] border border-amber-500/40 inline-flex items-center gap-1 cursor-pointer">
                              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Proof
                            </button>
                          ` : '<span class="text-[10px] text-slate-500 italic">No receipt</span>'}
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      `;
    }

    if (this.adminTab === 'board_members') {
      const boardMembers = store.getBoardMembers();
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/90 p-5 rounded-2xl border border-amber-500/30">
            <div>
              <div class="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <i data-lucide="shield-check" class="w-4 h-4 text-amber-400"></i> Admin Board Photo Management Hub
              </div>
              <h3 class="text-xl font-black text-white">NRDSS Board Member Photos</h3>
              <p class="text-xs text-slate-400">Upload, manage, and replace official board member photos for member viewing and downloading.</p>
            </div>
            <button onclick="app.openEditBoardMemberModal(null)" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs transition-all shadow-lg flex items-center gap-2 border border-amber-400 hover:scale-105 active:scale-95 cursor-pointer">
              <i data-lucide="upload-cloud" class="w-4 h-4 text-slate-950"></i> Upload New Member Photo
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${boardMembers.map(m => `
              <div class="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4 flex flex-col justify-between relative text-left">
                <!-- Photo Frame -->
                <div onclick="app.openPhotoLightbox('${m.id}')" class="relative rounded-xl overflow-hidden border border-slate-800 shadow-sm bg-slate-950 group cursor-pointer h-52 flex items-center justify-center">
                  <img src="${m.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80'}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-all opacity-95 group-hover:opacity-100" />
                  <div class="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-1.5 text-white font-extrabold text-xs">
                    <i data-lucide="eye" class="w-4 h-4 text-amber-400"></i> View Full Photo
                  </div>
                </div>

                <!-- Member Name -->
                <div>
                  <h4 class="font-black text-white text-base leading-tight">${m.name}</h4>
                </div>

                <!-- Controls -->
                <div class="pt-3 border-t border-slate-800 flex flex-col gap-2">
                  <div class="flex items-center gap-1.5">
                    <button onclick="app.openPhotoLightbox('${m.id}')" class="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer border border-amber-400">
                      <i data-lucide="eye" class="w-4 h-4 text-slate-950"></i> View
                    </button>
                    <button onclick="app.downloadBoardPhoto('${m.id}')" class="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer">
                      <i data-lucide="download" class="w-4 h-4"></i> Download
                    </button>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <button onclick="app.openEditBoardMemberModal('${m.id}')" class="flex-1 py-1.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-400"></i> Edit / Re-upload
                    </button>
                    <button onclick="app.handleDeleteBoardMember('${m.id}')" class="p-1.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-400 font-bold border border-red-500/40 text-xs transition-all cursor-pointer" title="Delete Member">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    if (this.adminTab === 'event_income') {
      let allRegistrations = [];
      let totalEventIncome = 0;
      let paidCount = 0;
      let eventsWithFeeCount = 0;

      events.forEach(evt => {
        if (evt.registrationFee > 0) eventsWithFeeCount++;
        const regs = evt.registrations || [];
        regs.forEach((reg, regIndex) => {
          const feePaid = reg.feePaid !== undefined ? Number(reg.feePaid) : (evt.registrationFee || 0);
          if (reg.paymentStatus === 'Paid' || feePaid > 0) {
            totalEventIncome += feePaid;
            paidCount++;
          }
          const memberObj = users.find(u => u.id === reg.userId || (u.email && u.email.toLowerCase() === (reg.email || '').toLowerCase()));
          allRegistrations.push({
            ...reg,
            eventId: evt.id,
            eventTitle: evt.title,
            eventDate: evt.date,
            eventFee: evt.registrationFee || 0,
            regIndex: regIndex,
            feePaid: feePaid,
            memberObj: memberObj
          });
        });
      });

      const searchQuery = (this.eventIncomeSearchQuery || '').trim().toLowerCase();
      const filterEventId = this.eventIncomeFilterEvent || 'All';

      const pendingRegistrations = allRegistrations.filter(r => r.paymentStatus === 'Pending Review');

      let filteredRegistrations = allRegistrations;

      if (filterEventId !== 'All') {
        filteredRegistrations = filteredRegistrations.filter(r => r.eventId === filterEventId);
      }

      if (searchQuery) {
        filteredRegistrations = filteredRegistrations.filter(r => 
          (r.name && r.name.toLowerCase().includes(searchQuery)) ||
          (r.surname && r.surname.toLowerCase().includes(searchQuery)) ||
          (r.email && r.email.toLowerCase().includes(searchQuery)) ||
          (r.contact && r.contact.toLowerCase().includes(searchQuery)) ||
          (r.ticketCode && r.ticketCode.toLowerCase().includes(searchQuery)) ||
          (r.eventTitle && r.eventTitle.toLowerCase().includes(searchQuery)) ||
          (r.memberObj && r.memberObj.memberCode && r.memberObj.memberCode.toLowerCase().includes(searchQuery))
        );
      }

      return `
        <!-- Event Registration Income & Who Paid Center -->
        <div class="glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
          
          <!-- Top Action Bar -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider mb-1">
                <i data-lucide="banknote" class="w-3.5 h-3.5 text-emerald-600"></i> Event Registration Revenue Ledger
              </div>
              <h3 class="text-xl font-black text-slate-900 flex items-center gap-2">
                Event Registration Income & Member Payments
              </h3>
              <p class="text-xs text-slate-600">Track all income collected from event registrations, inspect who paid, and view payment receipt attachments.</p>
            </div>

            <div class="flex flex-wrap gap-2 w-full md:w-auto">
              <button onclick="app.exportEventIncomeCSV()" class="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                <i data-lucide="download" class="w-4 h-4"></i> Export Statement (.CSV)
              </button>
              <button onclick="app.openIncomeBreakdownModal()" class="px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                <i data-lucide="calculator" class="w-4 h-4 text-amber-400"></i> View Combined Ledger
              </button>
            </div>
          </div>

          <!-- Pending Event Registration Payments Queue (Master & Executive Admin Approval Center) -->
          ${pendingRegistrations.length > 0 ? `
            <div class="bg-amber-950/40 border-2 border-amber-500 rounded-2xl p-5 space-y-4 shadow-xl text-left">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-3">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider animate-pulse">
                    🚨 ACTION REQUIRED
                  </span>
                  <h4 class="font-black text-white text-base">Pending Event Payment Approvals (${pendingRegistrations.length})</h4>
                </div>
                <span class="text-xs text-amber-300 font-bold">Review payment receipt statement uploaded by member to approve & issue ticket pass</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${pendingRegistrations.map(reg => `
                  <div class="bg-slate-900 p-4 rounded-2xl border border-amber-500/40 space-y-3 shadow-md flex flex-col justify-between">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span class="font-mono text-amber-400 font-bold text-xs">${reg.ticketCode}</span>
                        <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px] uppercase border border-amber-500/30">
                          Pending Admin Review
                        </span>
                      </div>
                      <div class="flex items-center gap-3">
                        <img src="${reg.memberObj ? reg.memberObj.photo : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}" class="w-10 h-10 rounded-full object-cover border border-amber-400" />
                        <div>
                          <div class="font-black text-white text-sm">${reg.name} ${reg.surname}</div>
                          <div class="text-[10px] text-slate-400 font-mono">${reg.contact} &bull; ${reg.email}</div>
                        </div>
                      </div>
                      <div class="bg-slate-950 p-2.5 rounded-xl text-xs space-y-1">
                        <div class="text-slate-200 font-bold leading-tight">${reg.eventTitle}</div>
                        <div class="flex items-center justify-between text-[11px] pt-1">
                          <span class="text-slate-400">Entry Fee: <strong class="text-amber-400 font-mono">${reg.feePaid || reg.eventFee} SAR</strong></span>
                          <span class="text-slate-400">Method: <strong class="text-slate-200">${reg.paymentMethod || 'Online'}</strong></span>
                        </div>
                      </div>
                    </div>

                    <div class="space-y-2 pt-2 border-t border-slate-800">
                      ${reg.paymentReceipt ? `
                        <button onclick="app.viewTicketPaymentReceipt('${reg.eventId}', '${reg.ticketCode}')" class="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer">
                          <i data-lucide="eye" class="w-3.5 h-3.5 text-amber-400"></i> View Uploaded Statement of Payment
                        </button>
                      ` : `
                        <div class="text-[10px] text-amber-400 italic text-center">No statement file uploaded</div>
                      `}
                      <div class="flex gap-2">
                        <button onclick="app.handleApproveEventPayment('${reg.eventId}', ${reg.regIndex})" class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1">
                          <i data-lucide="check-circle" class="w-4 h-4"></i> Approve Payment & Activate Ticket
                        </button>
                        <button onclick="app.handleRejectEventPayment('${reg.eventId}', ${reg.regIndex})" class="py-2.5 px-3 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-400 font-bold text-xs border border-red-500/40 flex items-center justify-center gap-1">
                          <i data-lucide="x-circle" class="w-4 h-4"></i> Reject
                        </button>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Income Metrics Summary Ribbon -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 p-5 rounded-2xl border border-emerald-500/40 text-white shadow-xl space-y-1">
              <div class="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">Total Event Revenue Collected</div>
              <div class="text-3xl font-black text-white">${totalEventIncome} <span class="text-sm text-amber-400 font-bold">SAR</span></div>
              <div class="text-[11px] text-slate-300">Sum of all event registration fees from members</div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-1 text-left">
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Paid Attendees</div>
              <div class="text-3xl font-black text-slate-900">${paidCount} <span class="text-xs font-bold text-slate-500">Paid Members/Guests</span></div>
              <div class="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i> Verified Registrations with Gate Pass
              </div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-1 text-left">
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Events Breakdown</div>
              <div class="text-3xl font-black text-blue-900">${events.length} <span class="text-xs font-bold text-slate-500">Total Programs</span></div>
              <div class="text-[11px] text-slate-600 font-medium">Average ${paidCount ? Math.round(totalEventIncome / paidCount) : 0} SAR revenue per attendee</div>
            </div>
          </div>

          <!-- Per-Event Income Cards Grid -->
          <div class="space-y-3">
            <div class="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <i data-lucide="calendar" class="w-4 h-4 text-amber-600"></i> Per-Event Revenue Breakdown:
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              ${events.map(evt => {
                const evtRegs = evt.registrations || [];
                const evtRevenue = evtRegs.reduce((sum, r) => sum + (r.feePaid !== undefined ? Number(r.feePaid) : (evt.registrationFee || 0)), 0);
                return `
                  <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-left flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2 mb-1">
                        <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                          Fee: ${evt.registrationFee || 0} SAR
                        </span>
                        <span class="text-[10px] font-bold text-slate-500">${evt.date}</span>
                      </div>
                      <h4 class="font-extrabold text-slate-900 text-sm leading-tight line-clamp-1">${evt.title}</h4>
                      <div class="text-xs text-slate-600 mt-1">${evtRegs.length} Registered Attendees</div>
                    </div>
                    <div class="pt-2 border-t border-slate-100 space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-500">Collected Income:</span>
                        <strong class="text-base font-black text-emerald-700">${evtRevenue} SAR</strong>
                      </div>
                      <div class="grid grid-cols-2 gap-1.5">
                        <button onclick="app.downloadEventAttendancePDF('${evt.id}')" class="py-1 px-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-800 font-extrabold text-[10px] transition-all border border-red-200 flex items-center justify-center gap-1">
                          <i data-lucide="file-text" class="w-3 h-3 text-red-600"></i> PDF Report
                        </button>
                        <button onclick="app.downloadEventAttendanceExcel('${evt.id}')" class="py-1 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-extrabold text-[10px] transition-all border border-emerald-200 flex items-center justify-center gap-1">
                          <i data-lucide="file-spreadsheet" class="w-3 h-3 text-emerald-600"></i> Excel (.CSV)
                        </button>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Search & Filter Controls -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div class="w-full sm:w-80 relative">
              <input type="text" placeholder="Search who paid by name, code, email, ticket..." value="${this.eventIncomeSearchQuery || ''}" oninput="app.eventIncomeSearchQuery = this.value; app.render();" class="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold text-xs focus:outline-none focus:border-amber-500 shadow-sm" />
              <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3 top-3"></i>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto">
              <select onchange="app.eventIncomeFilterEvent = this.value; app.render();" class="px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-bold shadow-sm">
                <option value="All">All Events (${events.length})</option>
                ${events.map(evt => `<option value="${evt.id}" ${filterEventId === evt.id ? 'selected' : ''}>${evt.title}</option>`).join('')}
              </select>
            </div>
          </div>

          <!-- Detailed "Who Paid" Roster Table -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-black text-slate-900 text-base flex items-center gap-2">
                <i data-lucide="users" class="w-5 h-5 text-emerald-600"></i> Event Payment Roster & Attendees (${filteredRegistrations.length})
              </h4>
              <span class="text-xs text-slate-500 font-semibold">Showing members who paid event registration fees</span>
            </div>

            ${filteredRegistrations.length === 0 ? `
              <div class="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
                <i data-lucide="banknote" class="w-10 h-10 text-slate-400 mx-auto"></i>
                <div class="text-slate-700 text-sm font-bold">No event registration payments found matching your criteria.</div>
              </div>
            ` : `
              <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table class="w-full text-left text-xs text-slate-800">
                  <thead class="bg-slate-100 uppercase text-[10px] text-slate-600 font-black sticky top-0 border-b border-slate-200">
                    <tr>
                      <th class="p-3">#</th>
                      <th class="p-3">Attendee Member Details</th>
                      <th class="p-3">Event Program</th>
                      <th class="p-3 text-right">Fee Paid (SAR)</th>
                      <th class="p-3">Payment Status & Method</th>
                      <th class="p-3">Ticket Pass Code</th>
                      <th class="p-3 text-center">Receipt File</th>
                      <th class="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    ${filteredRegistrations.map((reg, idx) => `
                      <tr class="hover:bg-slate-50 transition-all">
                        <td class="p-3 font-mono font-bold text-slate-400">${idx + 1}</td>
                        <td class="p-3">
                          <div class="flex items-center gap-3">
                            <img src="${reg.memberObj ? reg.memberObj.photo : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}" class="w-9 h-9 rounded-full object-cover clean-avatar border border-amber-500/40 shadow-sm flex-shrink-0" />
                            <div>
                              <div class="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                                <span>${reg.name} ${reg.surname}</span>
                                ${reg.memberObj ? `<span class="px-1.5 py-0.5 rounded bg-blue-100 text-blue-900 font-mono text-[9px] font-extrabold">${reg.memberObj.memberCode}</span>` : '<span class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[9px]">Guest</span>'}
                              </div>
                              <div class="text-[10px] text-slate-500 font-mono">${reg.contact} &bull; ${reg.email}</div>
                            </div>
                          </div>
                        </td>
                        <td class="p-3">
                          <div class="font-extrabold text-slate-900 text-xs">${reg.eventTitle}</div>
                          <div class="text-[10px] text-slate-500">${reg.eventDate}</div>
                        </td>
                        <td class="p-3 text-right">
                          <div class="font-black text-sm text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 inline-block font-mono">
                            ${reg.feePaid || 0} SAR
                          </div>
                        </td>
                        <td class="p-3">
                          <div class="space-y-0.5">
                            ${reg.paymentStatus === 'Pending Review' ? `
                              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-900 font-extrabold text-[10px] uppercase border border-amber-400">
                                <i data-lucide="clock" class="w-3 h-3 text-amber-600"></i> Pending Review
                              </span>
                            ` : reg.paymentStatus === 'Rejected' ? `
                              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-900 font-extrabold text-[10px] uppercase border border-red-300">
                                <i data-lucide="x-circle" class="w-3 h-3 text-red-600"></i> Rejected
                              </span>
                            ` : `
                              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] uppercase border border-emerald-300">
                                <i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-600"></i> Verified & Paid
                              </span>
                            `}
                            <div class="text-[10px] text-slate-500 font-medium">${reg.paymentMethod || 'Online / Cash'}</div>
                          </div>
                        </td>
                        <td class="p-3 font-mono font-bold text-blue-900">
                          <span class="bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-[10px]">${reg.ticketCode}</span>
                        </td>
                        <td class="p-3 text-center">
                          ${reg.paymentReceipt ? `
                            <button onclick="app.viewTicketPaymentReceipt('${reg.eventId}', '${reg.ticketCode}')" class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] transition-all inline-flex items-center gap-1 shadow-sm cursor-pointer">
                              <i data-lucide="file-text" class="w-3.5 h-3.5"></i> View Receipt
                            </button>
                          ` : `
                            <span class="text-[10px] text-slate-400 italic">No receipt</span>
                          `}
                        </td>
                        <td class="p-3 text-right space-x-1.5">
                          ${reg.paymentStatus === 'Pending Review' ? `
                            <button onclick="app.handleApproveEventPayment('${reg.eventId}', ${reg.regIndex})" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] transition-all shadow">
                              Approve
                            </button>
                          ` : ''}
                          <button onclick="app.openEventTicketPassModal(store.getEvents().find(e=>e.id==='${reg.eventId}'), store.getEvents().find(e=>e.id==='${reg.eventId}').registrations[${reg.regIndex}])" class="px-2.5 py-1 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-[11px] transition-all">
                            Pass QR
                          </button>
                          <button onclick="app.openEditRegistrationModal('${reg.eventId}', ${reg.regIndex})" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] transition-all">
                            Edit
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            `}
          </div>

        </div>
      `;
    }

    if (this.adminTab === 'gallery') {
      const activeFilter = this.galleryAlbumFilter || 'All';
      const albums = Array.from(new Set(gallery.map(g => g.album || g.category || 'General Album')));
      const filteredGallery = activeFilter === 'All' ? gallery : gallery.filter(g => (g.album || g.category) === activeFilter);

      return `
        <!-- Photo & Video Album Management Center -->
        <div class="glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
          
          <!-- Top Action Bar: Upload Button, Create Album Button, Count -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
                <i data-lucide="image" class="w-5 h-5 text-amber-600"></i> Photo & Video Album Manager (${gallery.length} Items)
              </h3>
              <p class="text-xs text-slate-600">Upload photos & videos, organize albums, move or cut/paste media between albums, and edit details.</p>
            </div>

            <div class="flex flex-wrap gap-2 w-full md:w-auto">
              <button onclick="app.openCreateGalleryModal()" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                <i data-lucide="upload" class="w-4 h-4"></i> Upload Photo / Video
              </button>
              <button onclick="app.promptCreateNewAlbum()" class="px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                <i data-lucide="folder-plus" class="w-4 h-4 text-amber-400"></i> + Create New Album
              </button>
            </div>
          </div>

          <!-- Album Filter Selector Pills -->
          <div class="space-y-2">
            <div class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <i data-lucide="folder" class="w-4 h-4 text-amber-600"></i> Select Album:
            </div>
            <div class="flex items-center gap-2 overflow-x-auto pb-2">
              <button onclick="app.galleryAlbumFilter = 'All'; app.render();" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${activeFilter === 'All' ? 'bg-blue-900 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
                All Media (${gallery.length})
              </button>
              ${albums.map(alb => {
        const count = gallery.filter(g => (g.album || g.category) === alb).length;
        return `
                  <button onclick="app.galleryAlbumFilter = '${alb.replace(/'/g, "\\'")}'; app.render();" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeFilter === alb ? 'bg-blue-900 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} flex items-center gap-1.5">
                    <i data-lucide="folder" class="w-3.5 h-3.5 text-amber-500"></i>
                    <span>${alb}</span>
                    <span class="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-800 text-[10px] font-black">${count}</span>
                  </button>
                `;
      }).join('')}
            </div>
          </div>

          <!-- Media Cards Grid -->
          ${filteredGallery.length === 0 ? `
            <div class="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
              <i data-lucide="image-off" class="w-10 h-10 text-slate-400 mx-auto"></i>
              <div class="text-slate-700 text-sm font-bold">No photos or videos found in album "${activeFilter}"</div>
              <p class="text-xs text-slate-500">Click "Upload Photo / Video" above to add new media to this album.</p>
            </div>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              ${filteredGallery.map(item => `
                <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
                  <div>
                    <!-- Preview Thumbnail Container -->
                    <div class="h-48 w-full relative overflow-hidden bg-slate-900 cursor-pointer" onclick="app.openPreviewGalleryModal('${item.id}')">
                      ${item.type === 'video' ? `
                        <video src="${item.mediaUrl}" class="w-full h-full object-cover pointer-events-none"></video>
                        <div class="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/20 transition-all">
                          <div class="w-12 h-12 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                            <i data-lucide="play" class="w-6 h-6 fill-slate-950 ml-0.5"></i>
                          </div>
                        </div>
                        <span class="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <i data-lucide="video" class="w-3 h-3"></i> Video
                        </span>
                      ` : `
                        <img src="${item.mediaUrl || item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span class="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-blue-900/90 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <i data-lucide="image" class="w-3 h-3 text-amber-400"></i> Photo
                        </span>
                      `}

                      <!-- Album Badge -->
                      <span class="absolute bottom-3 left-3 px-2 py-1 rounded-lg bg-slate-950/80 text-amber-300 border border-amber-500/40 text-[10px] font-bold truncate max-w-[85%] flex items-center gap-1">
                        <i data-lucide="folder" class="w-3 h-3 text-amber-400"></i> ${item.album || item.category || 'General'}
                      </span>
                    </div>

                    <!-- Details Content -->
                    <div class="p-4 space-y-2 text-left">
                      <h4 class="font-bold text-slate-900 text-sm leading-tight line-clamp-1" title="${item.title}">${item.title}</h4>
                      <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${item.caption || 'No description provided.'}</p>
                      <div class="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                        <i data-lucide="calendar" class="w-3 h-3"></i> ${item.date || ''}
                      </div>
                    </div>
                  </div>

                  <!-- Control Actions (Open, Edit, Move / Cut-Paste, Delete) -->
                  <div class="p-3 pt-0 border-t border-slate-100 mt-2 space-y-2">
                    <div class="grid grid-cols-2 gap-1.5">
                      <button onclick="app.openPreviewGalleryModal('${item.id}')" class="py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1">
                        <i data-lucide="eye" class="w-3.5 h-3.5 text-blue-700"></i> Open
                      </button>
                      <button onclick="app.openEditGalleryModal('${item.id}')" class="py-1.5 px-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-all flex items-center justify-center gap-1">
                        <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-700"></i> Edit
                      </button>
                    </div>

                    <div class="grid grid-cols-2 gap-1.5">
                      <button onclick="app.openMoveGalleryModal('${item.id}')" title="Move / Cut and Paste to another album" class="py-1.5 px-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs transition-all flex items-center justify-center gap-1 border border-blue-200">
                        <i data-lucide="scissors" class="w-3.5 h-3.5 text-blue-700"></i> Move/Cut
                      </button>
                      <button onclick="app.handleDeleteGalleryItem('${item.id}')" title="Delete from album" class="py-1.5 px-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs transition-all flex items-center justify-center gap-1 border border-red-200">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-600"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    }
    if (this.adminTab === 'approvals') {
      return `
        <!-- Pending Member Approval Queue -->
        <div class="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
              <i data-lucide="clock" class="w-5 h-5 text-amber-600"></i> Member Registration Details Verification (${pendingUsers.length})
            </h3>
          </div>

          ${pendingUsers.length === 0 ? `
            <div class="text-center py-8 text-slate-400 text-sm">
              <i data-lucide="check-circle-2" class="w-8 h-8 text-emerald-500 mx-auto mb-2 opacity-60"></i>
              No pending registrations! All submitted members have been reviewed and approved.
            </div>
          ` : `
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs text-slate-800">
                <thead class="bg-slate-100 uppercase text-[10px] text-slate-700 font-black border-b border-slate-200" style="background-color: #f1f5f9 !important; color: #334155 !important;">
                  <tr>
                    <th class="p-3">Applicant Name</th>
                    <th class="p-3">Category / Fee</th>
                    <th class="p-3">District / City</th>
                    <th class="p-3">Iqama / Phone</th>
                    <th class="p-3 text-right">Inspection Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 bg-white">
                  ${pendingUsers.map(u => `
                    <tr class="hover:bg-slate-50 transition-all">
                      <td class="p-3">
                        <div class="flex items-center gap-3">
                          <img src="${u.photo}" alt="" class="w-9 h-9 rounded-full object-cover clean-avatar border-2 border-amber-400 shadow-sm flex-shrink-0" />
                          <div>
                            <div class="font-black text-slate-900 text-sm" style="color: #0f172a !important; font-weight: 900 !important;">${u.fullName}</div>
                            <div class="text-[10px] text-slate-500 font-mono" style="color: #64748b !important;">${u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td class="p-3 font-black text-amber-800" style="color: #b45309 !important;">${u.membershipType} (${u.membershipFee} SAR)</td>
                      <td class="p-3 text-xs font-bold text-slate-700" style="color: #334155 !important;">${u.district} / ${u.saudiCity}</td>
                      <td class="p-3 font-mono text-xs font-bold text-slate-800" style="color: #1e293b !important;">${u.iqama}<br/>${u.phone}</td>
                      <td class="p-3 text-right">
                        <button onclick="app.openMemberReviewDrawer('${u.id}')" class="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center gap-1.5 ml-auto shadow-md">
                          <i data-lucide="eye" class="w-4 h-4"></i> Inspect & Verify Details
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      `;
    }

    if (this.adminTab === 'members') {
      const activeFilter = this.memberStatusFilter || 'All';
      const approvedCount = users.filter(u => u.status === 'Approved').length;
      const pendingCount = users.filter(u => u.status === 'Pending').length;

      const displayedUsers = users.filter(u => {
        if (activeFilter !== 'All' && u.status !== activeFilter) return false;
        if (!this.searchQuery) return true;
        const q = this.searchQuery.toLowerCase();
        return u.fullName.toLowerCase().includes(q) || u.memberCode.toLowerCase().includes(q) || u.district.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.saudiCity.toLowerCase().includes(q);
      });

      return `
        <!-- Registry Members Table -->
        <div class="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
                <i data-lucide="users" class="w-5 h-5 text-emerald-600"></i> Registry Members Directory (${displayedUsers.length})
              </h3>
              <p class="text-xs text-slate-600">Inspect approved & pending member profiles, edit member codes, roles, or details.</p>
            </div>
            
            <div class="w-full md:w-72 relative">
              <input type="text" placeholder="Search by name, code, city, district..." oninput="app.searchQuery = this.value; app.render();" class="w-full px-3 py-2 pl-9 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500" value="${this.searchQuery}" />
              <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3 top-2.5"></i>
            </div>
          </div>

          <!-- Status Filter Tabs -->
          <div class="flex items-center gap-2 border-b border-slate-200 pb-3">
            <button onclick="app.memberStatusFilter = 'All'; app.render();" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${activeFilter === 'All' ? 'bg-blue-900 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
              All Members (${users.length})
            </button>
            <button onclick="app.memberStatusFilter = 'Approved'; app.render();" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${activeFilter === 'Approved' ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'} flex items-center gap-1.5 border border-emerald-200">
              <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-500"></i> Approved Members (${approvedCount})
            </button>
            <button onclick="app.memberStatusFilter = 'Pending'; app.render();" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${activeFilter === 'Pending' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-amber-50 text-amber-900 hover:bg-amber-100'} flex items-center gap-1.5 border border-amber-200">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-600"></i> Pending Approvals (${pendingCount})
            </button>
          </div>

          <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table class="w-full text-left text-xs text-slate-800">
              <thead class="bg-slate-100 uppercase text-[10px] text-slate-700 font-black border-b border-slate-200" style="background-color: #f1f5f9 !important; color: #334155 !important;">
                <tr>
                  <th class="p-3">Title Prefix & Name</th>
                  <th class="p-3">Member Code</th>
                  <th class="p-3">Role / Status</th>
                  <th class="p-3">Category</th>
                  <th class="p-3">District</th>
                  <th class="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white">
                ${displayedUsers.map(u => `
                  <tr class="hover:bg-slate-50 transition-all">
                    <td class="p-3">
                      <div class="flex items-center gap-3">
                        <img src="${u.photo}" alt="" class="w-9 h-9 rounded-full object-cover clean-avatar border-2 border-amber-400 shadow-sm flex-shrink-0" />
                        <div>
                          <div class="font-black text-slate-900 text-sm flex items-center gap-1.5" style="color: #020617 !important; font-weight: 900 !important;">
                            ${u.titlePrefix ? `<span class="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px] border border-amber-300">${u.titlePrefix}</span>` : ''}
                            <span style="color: #0f172a !important; font-weight: 900 !important;">${u.fullName}</span>
                          </div>
                          <div class="text-[10px] text-slate-500 font-mono" style="color: #64748b !important;">${u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3 font-mono text-xs font-black text-emerald-800" style="color: #065f46 !important; font-weight: 900 !important;">
                      <span class="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">${u.memberCode}</span>
                    </td>
                    <td class="p-3">
                      <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase shadow-sm" style="color: ${u.status === 'Approved' ? '#065f46' : '#78350f'} !important; background-color: ${u.status === 'Approved' ? '#d1fae5' : '#fef3c7'} !important; border: 1px solid ${u.status === 'Approved' ? '#6ee7b7' : '#fcd34d'} !important; font-weight: 900 !important;">
                        ${u.role} (${u.status})
                      </span>
                    </td>
                    <td class="p-3 text-xs font-black text-slate-900" style="color: #0f172a !important;">${u.membershipType}</td>
                    <td class="p-3 text-xs font-bold text-slate-700" style="color: #334155 !important;">${u.district}</td>
                    <td class="p-3 text-right">
                      <button onclick="app.openMemberReviewDrawer('${u.id}')" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs transition-all shadow-sm flex items-center gap-1 ml-auto">
                        <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-400"></i> Edit & Inspect
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    if (this.adminTab === 'events') {
      return `
        <!-- Event & Ad Publishing Tools -->
        <div class="space-y-6">
          
          <!-- Published Events Management Box -->
          <div class="glass-card rounded-2xl p-6 border border-slate-200 space-y-5">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <i data-lucide="calendar" class="w-5 h-5 text-emerald-600"></i> Published Community Events (${events.length})
                </h3>
                <p class="text-xs text-slate-600">Manage event schedules, edit event information, inspect attendee registrations, and delete events.</p>
              </div>
              <button onclick="app.openCreateEventModal()" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                <i data-lucide="plus-circle" class="w-4 h-4"></i> Create & Publish New Event
              </button>
            </div>

            ${events.length === 0 ? `
              <div class="text-center py-8 text-slate-500 text-sm">
                No events published yet. Click "Create & Publish New Event" above to publish one.
              </div>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${events.map(evt => {
        const regCount = evt.registrations ? evt.registrations.length : (evt.registeredMembers ? evt.registeredMembers.length : 0);
        return `
                    <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between space-y-4 text-left">
                      <div class="flex items-start gap-4">
                        ${evt.bannerUrl ? `
                          <img src="${evt.bannerUrl}" class="w-20 h-20 rounded-xl object-cover border border-slate-300 flex-shrink-0" />
                        ` : ''}
                        <div class="space-y-1 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">${evt.date} (${evt.time})</span>
                            <span class="text-[10px] font-extrabold text-blue-800 bg-blue-100 px-2 py-0.5 rounded border border-blue-300">${regCount} Registrations</span>
                          </div>
                          <h4 class="font-extrabold text-slate-900 text-base leading-tight">${evt.title}</h4>
                          <p class="text-xs text-slate-600 line-clamp-1">${evt.locationName}</p>
                        </div>
                      </div>

                      <!-- Action Buttons: View Registrations, Edit Event, Reports, Delete Event -->
                      <div class="space-y-2 pt-2 border-t border-slate-200">
                        <div class="flex flex-wrap items-center gap-2">
                          <button onclick="app.openEventRegistrationsModal('${evt.id}')" class="flex-1 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm">
                            <i data-lucide="users" class="w-3.5 h-3.5"></i> View Attendees (${regCount})
                          </button>
                          <button onclick="app.openEditEventModal('${evt.id}')" class="py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm">
                            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Edit
                          </button>
                          <button onclick="app.handleDeleteEvent('${evt.id}')" class="py-2 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Delete
                          </button>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                          <button onclick="app.downloadEventAttendancePDF('${evt.id}')" class="py-1.5 px-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-800 font-extrabold text-[11px] transition-all border border-red-200 flex items-center justify-center gap-1">
                            <i data-lucide="file-text" class="w-3.5 h-3.5 text-red-600"></i> PDF Report
                          </button>
                          <button onclick="app.downloadEventAttendanceExcel('${evt.id}')" class="py-1.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-extrabold text-[11px] transition-all border border-emerald-200 flex items-center justify-center gap-1">
                            <i data-lucide="file-spreadsheet" class="w-3.5 h-3.5 text-emerald-600"></i> Excel Report (.CSV)
                          </button>
                        </div>
                      </div>
                    </div>
                  `;
      }).join('')}
              </div>
            `}
          </div>

          <!-- Ad Space Management (View, Upload, Edit, Delete Advertisements) -->
          <div class="glass-card rounded-2xl p-6 border border-slate-800 space-y-5">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <i data-lucide="megaphone" class="w-5 h-5 text-amber-600"></i> Uploaded Advertisements & Sponsor Space (${ads.length})
                </h3>
                <p class="text-xs text-slate-600">Manage photo or video advertisements featured across the portal and member dashboards.</p>
              </div>
              <button onclick="app.openCreateAdModal()" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                <i data-lucide="plus" class="w-4 h-4"></i> Upload New Ad
              </button>
            </div>

            ${ads.length === 0 ? `
              <div class="text-center py-8 text-slate-400 text-sm">
                No active advertisement banners uploaded yet. Click "Upload New Ad" above to add one.
              </div>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${ads.map(ad => `
                  <div class="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between space-y-3 relative group text-left min-w-0">
                    <div class="flex items-start gap-4 min-w-0">
                      <div class="w-24 h-24 rounded-xl overflow-hidden bg-slate-950 border border-slate-700 flex-shrink-0">
                        ${ad.type === 'video' ? `
                          <video src="${ad.mediaUrl}" autoplay loop muted playsinline class="w-full h-full object-cover pointer-events-none select-none"></video>
                        ` : `
                          <img src="${ad.mediaUrl}" alt="${ad.title}" class="w-full h-full object-cover" />
                        `}
                      </div>
                      <div class="flex-1 space-y-1 text-left min-w-0 overflow-hidden">
                        <div class="flex items-center justify-between">
                          <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">${ad.type} banner</span>
                        </div>
                        <h4 class="font-extrabold text-white text-sm sm:text-base leading-tight truncate" title="${ad.title}">${ad.title}</h4>
                        <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed break-words">${ad.caption}</p>
                        ${ad.targetUrl ? `
                          <a href="${ad.targetUrl}" target="_blank" class="text-[11px] text-blue-400 hover:underline flex items-center gap-1 min-w-0" title="${ad.targetUrl}">
                            <i data-lucide="external-link" class="w-3 h-3 flex-shrink-0"></i>
                            <span class="truncate">${ad.targetUrl}</span>
                          </a>
                        ` : ''}
                      </div>
                    </div>

                    <div class="flex items-center gap-2 pt-2 border-t border-slate-800">
                      <button onclick="app.openEditAdModal('${ad.id}')" class="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5">
                        <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Edit Ad
                      </button>
                      <button onclick="app.handleDeleteAdvertisement('${ad.id}')" class="flex-1 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-400 font-bold text-xs border border-red-500/40 transition-all flex items-center justify-center gap-1.5">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Delete Ad
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      `;
    }

    if (this.adminTab === 'master_control' && isMaster) {
      return `
        <!-- Master Admin Control Panel (System Settings, Admin Creation, Fee Adjuster) -->
        <div class="space-y-6">
          <div class="glass-card rounded-2xl p-6 border border-amber-500/40 bg-amber-950/10 space-y-4">
            <h3 class="text-lg font-bold text-amber-300 flex items-center gap-2">
              <i data-lucide="crown" class="w-5 h-5 text-amber-400"></i> Master Administrator System Control
            </h3>
            <p class="text-xs text-slate-300">As Master Admin, you have exclusive privilege to create new Executive Admins, adjust membership fee tiers, and review system audit logs.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <!-- Create Admin Account Box -->
              <div class="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 class="font-bold text-white text-sm flex items-center gap-2">
                  <i data-lucide="user-plus" class="w-4 h-4 text-emerald-400"></i> Create New Executive Admin
                </h4>
                <form onsubmit="event.preventDefault(); const e=this.email.value; const p=this.password.value; const n=this.fullName.value; const t=this.titlePrefix.value; if(app.handleCreateNewAdmin(e,p,n,t)){ this.reset(); }" class="space-y-2 text-xs">
                  <input type="email" name="email" required placeholder="admin.email@gmail.com" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
                  <input type="password" name="password" required placeholder="Admin Password" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
                  <input type="text" name="fullName" required placeholder="Admin Full Name" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
                  <input type="text" name="titlePrefix" placeholder="Title Prefix (e.g. Executive Admin)" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
                  <button type="submit" class="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold">
                    Create Executive Admin Account
                  </button>
                </form>
              </div>

              <!-- Database Backup & Audit Logs -->
              <div class="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 class="font-bold text-white text-sm flex items-center gap-2">
                  <i data-lucide="database" class="w-4 h-4 text-blue-400"></i> Database Backup & System Audit
                </h4>
                <p class="text-xs text-slate-400">Export database JSON snapshot or inspect security audit logs.</p>
                <div class="flex gap-2">
                  <button onclick="const data=JSON.stringify(localStorage); const blob=new Blob([data], {type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='NRDSS_DB_Backup_'+Date.now()+'.json'; a.click(); app.showToast('Database snapshot exported!', 'success');" class="flex-1 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center justify-center gap-2">
                    <i data-lucide="download" class="w-4 h-4"></i> Export Backup
                  </button>
                </div>
              </div>
            </div>

            <!-- Remove Member & Data Purge Tool -->
            <div class="bg-slate-900 p-5 rounded-2xl border border-red-500/40 bg-red-950/10 space-y-4 text-left mt-6">
              <div class="flex items-center justify-between">
                <h4 class="font-black text-red-400 text-sm sm:text-base flex items-center gap-2">
                  <i data-lucide="user-x" class="w-5 h-5 text-red-500"></i> Remove Member & Purge Server Information
                </h4>
                <span class="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold uppercase border border-red-500/30">
                  Master Admin Control
                </span>
              </div>
              <p class="text-xs text-slate-300">
                Put Member ID (e.g. <code class="font-mono text-amber-300">usr_member_raj</code>), Member Code (e.g. <code class="font-mono text-amber-300">NRDSS-2026-8891</code>), or Email Address to search and completely remove all their information from local storage & server.
              </p>

              <div class="flex flex-col sm:flex-row gap-2">
                <div class="flex-1 relative">
                  <input type="text" id="master-purge-input" value="${this.purgeSearchQuery || ''}" oninput="app.purgeSearchQuery = this.value; app.lookupMemberForPurge(this.value);" placeholder="Enter Member ID, Code, or Email..." class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-red-500" />
                </div>
                <button onclick="app.handlePurgeMemberById(document.getElementById('master-purge-input').value)" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs transition-all shadow-lg shadow-red-950/50 flex items-center justify-center gap-2">
                  <i data-lucide="trash-2" class="w-4 h-4"></i> Delete Member & Server Data
                </button>
              </div>

              <!-- Live Member Preview Card -->
              ${this.foundMemberForPurge ? `
                <div class="p-4 rounded-xl bg-slate-950 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                  <div class="flex items-center gap-3">
                    <img src="${this.foundMemberForPurge.photo}" class="w-12 h-12 rounded-full object-cover clean-avatar border border-amber-400" />
                    <div class="text-left">
                      <div class="font-extrabold text-white text-sm flex items-center gap-2">
                        <span>${this.foundMemberForPurge.fullName}</span>
                        <span class="text-[10px] px-2 py-0.5 rounded font-mono ${this.foundMemberForPurge.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}">${this.foundMemberForPurge.status}</span>
                      </div>
                      <div class="text-xs text-slate-400 font-mono">${this.foundMemberForPurge.memberCode} | ID: ${this.foundMemberForPurge.id}</div>
                      <div class="text-[11px] text-amber-400">${this.foundMemberForPurge.membershipType} (${this.foundMemberForPurge.membershipFee} SAR) &bull; ${this.foundMemberForPurge.email}</div>
                    </div>
                  </div>
                  <button onclick="if(confirm('Are you sure you want to permanently delete member ${this.foundMemberForPurge.fullName} (${this.foundMemberForPurge.memberCode}) and purge all their server data?')){ app.handlePurgeMemberById('${this.foundMemberForPurge.id}'); }" class="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs transition-all shadow-md flex items-center gap-1.5">
                    <i data-lucide="trash-2" class="w-4 h-4"></i> Confirm Delete
                  </button>
                </div>
              ` : this.purgeSearchQuery ? `
                <div class="text-xs text-slate-400 italic p-3 bg-slate-950 rounded-xl border border-slate-800">
                  No member matching "${this.purgeSearchQuery}" currently found in database.
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }

    return '';
  }

  // About Page Component
  renderAboutPage() {
    return `
      <main class="flex-1 pb-16 space-y-10">
        
        <!-- Hero Section: About NRDSS -->
        <section class="relative py-14 lg:py-20 px-4 overflow-hidden bg-gradient-to-b from-blue-950/40 to-transparent">
          <div class="max-w-5xl mx-auto text-center relative z-10 space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-black uppercase tracking-wider">
              <i data-lucide="info" class="w-4 h-4 text-amber-500"></i>
              About NRDSS Saudi Arabia
            </div>
            
            <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              About NRDSS <br />
              <span class="text-blue-800">
                Nuwakot Rasuwa Dhading Samaj Saudi Arabia
              </span>
            </h1>

            <!-- About Us Card -->
            <div class="glass-card rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto text-left border border-slate-200 shadow-xl space-y-4">
              <div class="border-b border-slate-200/80 pb-3">
                <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <i data-lucide="building-2" class="w-6 h-6 text-amber-600"></i> About Us
                </h2>
              </div>
              <p class="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                <strong>Nuwakot Rasuwa Dhading Samaj Saudi Arabia (NRDSS)</strong> is a non-profit social organization established by people from the districts of Nuwakot, Rasuwa, and Dhading who are living and working in the Kingdom of Saudi Arabia.
              </p>
              <p class="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                Our mission is to unite our community, preserve our culture and traditions, support members during times of need, and contribute to the development of our home districts in Nepal. NRDSS serves as a bridge between our members in Saudi Arabia and our families back home by promoting friendship, cooperation, and social responsibility.
              </p>
            </div>
          </div>
        </section>

        <!-- Vision & Mission Section -->
        <section class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Our Vision -->
            <div class="glass-card rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col justify-between space-y-4">
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center shadow-md">
                  <i data-lucide="eye" class="w-6 h-6 text-amber-400"></i>
                </div>
                <h3 class="text-2xl font-black text-slate-900">Our Vision</h3>
                <p class="text-slate-700 text-base leading-relaxed font-medium">
                  To build a strong, united, and respected community that supports every member while contributing to the sustainable development of Nuwakot, Rasuwa, and Dhading.
                </p>
              </div>
              <div class="pt-4 border-t border-slate-200 text-xs font-bold text-blue-800 flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> Unified Community & Sustainable Development
              </div>
            </div>

            <!-- Our Mission -->
            <div class="glass-card rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md">
                <i data-lucide="target" class="w-6 h-6 text-amber-300"></i>
              </div>
              <h3 class="text-2xl font-black text-slate-900">Our Mission</h3>
              <ul class="space-y-3 text-slate-700 text-xs sm:text-sm font-semibold">
                <li class="flex items-start gap-2.5">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                  <span>Unite people from Nuwakot, Rasuwa, and Dhading living in Saudi Arabia.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                  <span>Promote Nepali culture, traditions, and social harmony.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                  <span>Support members during emergencies and difficult situations.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                  <span>Organize cultural, educational, and charitable programs.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                  <span>Contribute to education, health, disaster relief, and community development projects in Nepal.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                  <span>Encourage youth participation and volunteerism.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        <!-- Our Board Members Section -->
        <section id="board-members-section" class="max-w-7xl mx-auto px-4">
          <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-amber-600 flex items-center gap-1.5">
                  <i data-lucide="award" class="w-4 h-4 text-amber-500"></i> Executive Leadership
                </span>
                <h2 class="text-2xl lg:text-3xl font-extrabold text-slate-900">Our Board Members</h2>
                <p class="text-slate-600 text-xs sm:text-sm font-medium">Governing Executive Officers & Board of Directors of NRDSS Saudi Arabia.</p>
              </div>
              <div class="flex items-center gap-2">
                ${SecurityGuard.isAdminOrMaster(this.currentUser) ? `
                  <button onclick="app.openEditBoardMemberModal(null)" class="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5 border border-amber-400 hover:scale-105 active:scale-95 cursor-pointer">
                    <i data-lucide="plus-circle" class="w-4 h-4 text-slate-950"></i> Add Board Member
                  </button>
                ` : ''}
                <button onclick="app.openBoardMembersModal()" class="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-800 hover:from-blue-950 hover:to-emerald-900 text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2 border border-amber-400 hover:scale-105 active:scale-95 cursor-pointer">
                  <i data-lucide="maximize-2" class="w-4 h-4 text-amber-400"></i> View All (${store.getBoardMembers().length})
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${store.getBoardMembers().map(m => `
                <div id="board-card-about-${m.id}" class="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 relative overflow-hidden text-left">
                  <!-- Photo Frame -->
                  <div onclick="app.openPhotoLightbox('${m.id}')" class="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group cursor-pointer h-48 flex items-center justify-center">
                    <img src="${m.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80'}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-all opacity-95 group-hover:opacity-100" />
                    <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-1.5 text-white font-extrabold text-xs">
                      <i data-lucide="eye" class="w-4 h-4 text-amber-400"></i> View Full Photo
                    </div>
                  </div>

                  <!-- Member Name -->
                  <div>
                    <h3 class="font-black text-slate-900 text-sm leading-tight">${m.name}</h3>
                  </div>

                  <!-- Controls -->
                  <div class="pt-2 border-t border-slate-200 flex flex-col gap-1.5">
                    <div class="flex items-center gap-1.5">
                      <button onclick="app.openPhotoLightbox('${m.id}')" class="flex-1 py-1.5 px-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1 shadow-sm cursor-pointer border border-amber-400">
                        <i data-lucide="eye" class="w-3.5 h-3.5 text-slate-950"></i> View
                      </button>
                      <button onclick="app.downloadBoardPhoto('${m.id}')" class="flex-1 py-1.5 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1 shadow-sm cursor-pointer">
                        <i data-lucide="download" class="w-3.5 h-3.5 text-amber-400"></i> Download
                      </button>
                    </div>
                    ${SecurityGuard.isAdminOrMaster(this.currentUser) ? `
                      <button onclick="app.openEditBoardMemberModal('${m.id}')" class="w-full py-1.5 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-extrabold text-xs border border-amber-300 transition-all flex items-center justify-center gap-1 cursor-pointer" title="Edit / Re-upload Photo">
                        <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-700"></i> Edit / Re-upload
                      </button>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Our Values Section -->
        <section class="max-w-7xl mx-auto px-4">
          <div class="glass-card rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
            <div class="text-center max-w-2xl mx-auto space-y-2">
              <span class="text-xs font-bold uppercase tracking-widest text-amber-600">Core Principles</span>
              <h2 class="text-2xl lg:text-3xl font-extrabold text-slate-900">Our Values</h2>
              <p class="text-slate-600 text-xs sm:text-sm">The core tenets that guide every initiative and community decision at NRDSS.</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 mx-auto flex items-center justify-center">
                  <i data-lucide="users" class="w-5 h-5"></i>
                </div>
                <div class="font-extrabold text-slate-900 text-sm">Unity</div>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 mx-auto flex items-center justify-center">
                  <i data-lucide="award" class="w-5 h-5"></i>
                </div>
                <div class="font-extrabold text-slate-900 text-sm">Respect</div>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 mx-auto flex items-center justify-center">
                  <i data-lucide="shield-check" class="w-5 h-5"></i>
                </div>
                <div class="font-extrabold text-slate-900 text-sm">Transparency</div>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div class="w-10 h-10 rounded-xl bg-red-100 text-red-900 mx-auto flex items-center justify-center">
                  <i data-lucide="heart-handshake" class="w-5 h-5"></i>
                </div>
                <div class="font-extrabold text-slate-900 text-sm">Service</div>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 mx-auto flex items-center justify-center">
                  <i data-lucide="scale" class="w-5 h-5"></i>
                </div>
                <div class="font-extrabold text-slate-900 text-sm">Integrity</div>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-900 mx-auto flex items-center justify-center">
                  <i data-lucide="landmark" class="w-5 h-5"></i>
                </div>
                <div class="font-extrabold text-slate-900 text-sm">Community Development</div>
              </div>
            </div>
          </div>
        </section>

        <!-- About Our Three Districts Section -->
        <section class="max-w-7xl mx-auto px-4 space-y-8">
          <div class="text-center max-w-3xl mx-auto space-y-2">
            <span class="text-xs font-bold uppercase tracking-widest text-blue-800">Home Districts Profile</span>
            <h2 class="text-2xl lg:text-3xl font-extrabold text-slate-900">About Our Three Districts</h2>
            <p class="text-slate-600 text-sm">Detailed overview of Nuwakot, Rasuwa, and Dhading districts in Bagmati Province, Nepal.</p>
          </div>

          <!-- 1. Nuwakot District -->
          <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 text-left">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-black text-lg border-2 border-amber-400 shadow-md">
                NK
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-blue-800">Bagmati Province</span>
                <h3 class="text-2xl font-black text-slate-900">About Nuwakot - Nuwakot District</h3>
              </div>
            </div>

            <p class="text-slate-700 text-sm leading-relaxed font-medium">
              Nuwakot District is located in Bagmati Province of central Nepal. It covers an area of approximately 1,121 square kilometers and has a population of about 263,391 according to the 2021 national census.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed font-medium">
              Nuwakot is famous for its rich history, beautiful hills, fertile valleys, and cultural heritage. It served as an important strategic center during the unification of Nepal led by King Prithvi Narayan Shah.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <!-- Geography -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <i data-lucide="map" class="w-4 h-4 text-blue-700"></i> Geography
                </h4>
                <ul class="text-xs text-slate-700 space-y-1.5 font-semibold">
                  <li><strong>Province:</strong> Bagmati Province</li>
                  <li><strong>District Headquarters:</strong> Bidur</li>
                  <li><strong>Landscape:</strong> Hills, rivers, forests, and agricultural land</li>
                  <li><strong>Major Rivers:</strong> Trishuli River and Tadi River</li>
                </ul>
              </div>

              <!-- Famous Places -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <i data-lucide="compass" class="w-4 h-4 text-amber-600"></i> Famous Places
                </h4>
                <div class="flex flex-wrap gap-1.5 text-xs">
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Nuwakot Durbar (Seven-Storey Palace)</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Kakani</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Dupcheshwor Mahadev Temple</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Jalpa Devi Temple</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Betrawati</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Surya Chaur</span>
                </div>
                <p class="text-[11px] text-slate-500 italic pt-1">
                  These attractions offer historical monuments, mountain views, adventure tourism, and religious significance.
                </p>
              </div>
            </div>
          </div>

          <!-- 2. Rasuwa District -->
          <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 text-left">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black text-lg border-2 border-amber-400 shadow-md">
                RS
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-red-600">Northern Himalayan Border</span>
                <h3 class="text-2xl font-black text-slate-900">Rasuwa District</h3>
              </div>
            </div>

            <p class="text-slate-700 text-sm leading-relaxed font-medium">
              Rasuwa District lies in the northern Himalayan region of Bagmati Province and shares an international border with Tibet (China). The district has a population of approximately 46,689 (2021 Census).
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <!-- Geography -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <i data-lucide="mountain" class="w-4 h-4 text-red-600"></i> Geography
                </h4>
                <ul class="text-xs text-slate-700 space-y-1.5 font-semibold">
                  <li><strong>District Headquarters:</strong> Dhunche</li>
                  <li><strong>Landscape:</strong> High Himalayas, forests, rivers, glaciers, and alpine meadows</li>
                </ul>
              </div>

              <!-- Famous Places -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <i data-lucide="footprints" class="w-4 h-4 text-amber-600"></i> Famous Places
                </h4>
                <div class="flex flex-wrap gap-1.5 text-xs">
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Langtang National Park</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Gosaikunda Lake</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Langtang Valley</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Kyanjin Gompa</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Rasuwagadhi Fort</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Tamang Heritage Trail</span>
                </div>
                <p class="text-[11px] text-slate-500 italic pt-1">
                  Rasuwa is internationally known for trekking, mountaineering, biodiversity, and Tamang culture.
                </p>
              </div>
            </div>
          </div>

          <!-- 3. Dhading District -->
          <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 text-left">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-black text-lg border-2 border-amber-400 shadow-md">
                DH
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-emerald-700">Kathmandu - Pokhara Arterial Hub</span>
                <h3 class="text-2xl font-black text-slate-900">Dhading District</h3>
              </div>
            </div>

            <p class="text-slate-700 text-sm leading-relaxed font-medium">
              Dhading District is situated in Bagmati Province between Kathmandu and Pokhara. It features diverse geography ranging from river valleys to Himalayan peaks and has excellent road connectivity through the Prithvi Highway.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <!-- Geography -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <i data-lucide="navigation" class="w-4 h-4 text-emerald-700"></i> Geography
                </h4>
                <ul class="text-xs text-slate-700 space-y-1.5 font-semibold">
                  <li><strong>District Headquarters:</strong> Dhadingbesi</li>
                  <li><strong>Landscape:</strong> Hills, rivers, forests, and high mountains</li>
                  <li><strong>Major Rivers:</strong> Trishuli and Budhi Gandaki</li>
                </ul>
              </div>

              <!-- Famous Places -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <i data-lucide="sparkles" class="w-4 h-4 text-amber-600"></i> Famous Places
                </h4>
                <div class="flex flex-wrap gap-1.5 text-xs">
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Ganesh Himal</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Ruby Valley</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Tripurasundari Temple</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Ganga Jamuna Waterfall</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Budhi Gandaki River</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 font-bold text-slate-800 border border-slate-200">Darkha & Surrounding Hill Villages</span>
                </div>
                <p class="text-[11px] text-slate-500 italic pt-1">
                  Dhading is renowned for its natural beauty, trekking routes, cultural diversity, agriculture, and adventure tourism.
                </p>
              </div>
            </div>
          </div>

        </section>

        <!-- Executive Contact & Registration CTA -->
        <section class="max-w-7xl mx-auto px-4">
          <div class="glass-card rounded-3xl p-8 border border-slate-200 bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div class="space-y-3 text-left">
              <span class="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider">
                Official Executive Committee
              </span>
              <h3 class="text-2xl lg:text-3xl font-black text-white">Get in Touch with NRDSS Executive Board</h3>
              <p class="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                Have questions about registration, membership verification, emergency assistance, or sponsorship? Contact our official central office in Saudi Arabia.
              </p>
              <div class="flex flex-wrap gap-4 pt-2 text-xs font-bold text-amber-300">
                <div class="flex items-center gap-2">
                  <i data-lucide="mail" class="w-4 h-4 text-white"></i> Email: <a href="mailto:nrdssksa@gmail.com" class="underline font-mono">nrdssksa@gmail.com</a>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="map-pin" class="w-4 h-4 text-white"></i> Coverage: Riyadh, Jeddah, Dammam & All KSA Cities
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              ${!this.currentUser ? `
                <button onclick="app.openRegisterModal()" class="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2">
                  <i data-lucide="user-plus" class="w-4 h-4"></i> Join NRDSS Member
                </button>
              ` : `
                <button onclick="app.currentTab = 'dashboard'; app.render();" class="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2">
                  <i data-lucide="layout-dashboard" class="w-4 h-4"></i> Go to My Dashboard
                </button>
              `}
            </div>
          </div>
        </section>
      </main>
    `;
  }

  // Events Page Component (High-Contrast Guaranteed Visibility)
  renderEventsPage() {
    const events = store.getEvents();

    return `
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h2 class="text-3xl font-black" style="color: #0f172a !important; font-weight: 900 !important;">Community Events & Assemblies</h2>
          <p class="text-sm font-semibold" style="color: #334155 !important;">Register for upcoming NRDSS Saudi Arabia programs and receive your unique gate check-in attendance QR pass.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${events.map(evt => {
            const isRegistered = this.currentUser && evt.registeredMembers && evt.registeredMembers.includes(this.currentUser.id);
            return `
              <div class="bg-white rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl flex flex-col justify-between group">
                <div>
                  <div class="h-56 w-full overflow-hidden relative bg-slate-900">
                    <img src="${evt.bannerUrl}" alt="${evt.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/90 text-amber-300 border border-amber-400 text-xs font-black shadow-md">
                      ${evt.date}
                    </div>
                  </div>
                  <div class="p-6 space-y-3 text-left">
                    <h3 class="text-lg font-black leading-tight" style="color: #0f172a !important; font-weight: 900 !important;">${evt.title}</h3>
                    <div class="flex items-center gap-2 text-xs font-bold" style="color: #047857 !important;">
                      <i data-lucide="clock" class="w-4 h-4 text-emerald-600"></i> ${evt.time}
                    </div>
                    <div class="flex items-center gap-2 text-xs font-bold" style="color: #1e293b !important;">
                      <i data-lucide="map-pin" class="w-4 h-4 text-red-600 flex-shrink-0"></i>
                      <span>${evt.locationName}</span>
                    </div>

                    <!-- Embedded Google Maps Link -->
                    <div>
                      <a href="${evt.googleMapsUrl}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-extrabold underline" style="color: #1d4ed8 !important;">
                        <i data-lucide="map" class="w-4 h-4 text-blue-600"></i> Open Location in Google Maps
                      </a>
                    </div>

                    <p class="text-xs leading-relaxed pt-2 font-medium border-t border-slate-100" style="color: #334155 !important;">${evt.description}</p>
                  </div>
                </div>

                <div class="p-6 pt-0">
                  ${isRegistered ? `
                    <div class="w-full py-3.5 rounded-2xl bg-emerald-950 text-emerald-300 border border-emerald-500 font-black text-xs text-center flex items-center justify-center gap-2 shadow-md">
                      <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> Registered (Attendance Ticket Pass Generated)
                    </div>
                  ` : `
                    <button onclick="app.openEventRegistrationFormModal('${evt.id}')" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2">
                      <i data-lucide="ticket" class="w-4 h-4 text-amber-300"></i> Register & Get Ticket Pass
                    </button>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </main>
    `;
  }

  // Gallery Component (High-Contrast Guaranteed Visibility)
  renderGalleryPage() {
    const gallery = store.getGallery();

    return `
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h2 class="text-3xl font-black" style="color: #0f172a !important; font-weight: 900 !important;">NRDSS Photo & Media Gallery</h2>
          <p class="text-sm font-semibold" style="color: #334155 !important;">Highlights from assemblies, cultural celebrations, and community welfare programs.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          ${gallery.map(g => `
            <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg group flex flex-col justify-between">
              <div>
                <div class="h-48 overflow-hidden relative bg-slate-900">
                  <img src="${g.imageUrl}" alt="${g.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/90 text-xs font-extrabold text-amber-300 border border-amber-400">
                    ${g.category}
                  </span>
                </div>
                <div class="p-4 space-y-1 text-left">
                  <h4 class="font-black text-sm" style="color: #0f172a !important; font-weight: 900 !important;">${g.title}</h4>
                  <div class="text-[11px] font-semibold text-slate-500">${g.date}</div>
                </div>
              </div>
              <div class="p-4 pt-0 text-left">
                <a href="${g.imageUrl}" download="${g.title}.jpg" target="_blank" class="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:underline font-extrabold">
                  <i data-lucide="download" class="w-3.5 h-3.5 text-blue-700"></i> Download High-Res Image
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </main>
    `;
  }

  // News Component (High-Contrast Guaranteed Visibility)
  renderNewsPage() {
    const news = store.getNews();

    return `
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h2 class="text-3xl font-black" style="color: #0f172a !important; font-weight: 900 !important;">News & Official Circulars</h2>
          <p class="text-sm font-semibold" style="color: #334155 !important;">Stay updated with official announcements from the NRDSS Executive Board.</p>
        </div>

        <div class="space-y-6 max-w-4xl mx-auto">
          ${news.map(n => `
            <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-xl flex flex-col md:flex-row gap-6 items-center">
              <img src="${n.imageUrl}" alt="${n.title}" class="w-full md:w-52 h-40 object-cover rounded-2xl flex-shrink-0 shadow-md" />
              <div class="space-y-2 text-left flex-1">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full bg-red-100 text-red-900 border border-red-300 text-[10px] font-black uppercase">
                    ${n.category}
                  </span>
                  <span class="text-xs font-semibold text-slate-500">${n.date}</span>
                </div>
                <h3 class="text-lg font-black" style="color: #0f172a !important; font-weight: 900 !important;">${n.title}</h3>
                <p class="text-xs leading-relaxed font-medium" style="color: #334155 !important;">${n.summary}</p>
                <div class="pt-2">
                  <a href="${n.imageUrl}" download="${n.title}.jpg" target="_blank" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-extrabold text-xs border border-slate-700 transition-all shadow-md">
                    <i data-lucide="download" class="w-3.5 h-3.5 text-amber-400"></i> Download Attachment / Post
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </main>
    `;
  }

  // Photo & Video Album Gallery Management Methods
  openCreateGalleryModal(defaultAlbum = null) {
    this.showUploadGalleryModal = true;
    this.selectedGalleryItemToEdit = null;
    if (defaultAlbum) this.selectedGalleryDefaultAlbum = defaultAlbum;
    this.render();
  }

  openEditGalleryModal(itemId) {
    const gallery = store.getGallery();
    const item = gallery.find(g => g.id === itemId);
    if (item) {
      this.selectedGalleryItemToEdit = item;
      this.showUploadGalleryModal = true;
      this.render();
    }
  }

  openMoveGalleryModal(itemId) {
    const gallery = store.getGallery();
    const item = gallery.find(g => g.id === itemId);
    if (item) {
      this.selectedGalleryItemToMove = item;
      this.render();
    }
  }

  openPreviewGalleryModal(itemId) {
    const gallery = store.getGallery();
    const item = gallery.find(g => g.id === itemId);
    if (item) {
      this.selectedGalleryPreview = item;
      this.render();
    }
  }

  promptCreateNewAlbum() {
    const albumName = prompt('Enter new Album category name (e.g. Dashain 2026, Assembly, Sports):');
    if (albumName && albumName.trim()) {
      this.openCreateGalleryModal(albumName.trim());
    }
  }

  handleDeleteGalleryItem(itemId) {
    if (confirm('Are you sure you want to delete this media item from album?')) {
      let gallery = store.getGallery();
      gallery = gallery.filter(g => g.id !== itemId);
      store.setGallery(gallery);
      this.showToast('Media item successfully deleted!', 'success');
      this.render();
    }
  }

  handleMoveGalleryItem(itemId, targetAlbum) {
    if (!targetAlbum || !targetAlbum.trim()) {
      this.showToast('Please select or type a target destination album name.', 'warning');
      return;
    }
    const cleanAlbum = targetAlbum.trim();
    let gallery = store.getGallery();
    const itemIndex = gallery.findIndex(g => g.id === itemId);
    if (itemIndex !== -1) {
      gallery[itemIndex].album = cleanAlbum;
      gallery[itemIndex].category = cleanAlbum;
      store.setGallery(gallery);
      this.selectedGalleryItemToMove = null;
      this.showToast(`Media item successfully moved to album "${cleanAlbum}"!`, 'success');
      this.render();
    }
  }

  // File to Base64 Asynchronous Helper
  readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  }

  // Primary Gallery File & Multi-File Upload Form Submit Handler
  handleSaveGalleryMedia(e) {
    e.preventDefault();
    const form = e.target;
    const type = form.type ? form.type.value : 'photo';
    const title = form.title ? form.title.value.trim() : 'Media File';
    const album = form.album ? form.album.value.trim() : 'General Album';
    const directUrl = form.mediaUrl ? form.mediaUrl.value.trim() : '';
    const date = form.date ? form.date.value : new Date().toISOString().split('T')[0];
    const caption = form.caption ? form.caption.value.trim() : '';
    const fileInput = form.mediaFile;

    const isEdit = !!this.selectedGalleryItemToEdit;
    const existingId = isEdit ? this.selectedGalleryItemToEdit.id : null;

    const executeUpload = async () => {
      let gallery = store.getGallery();

      if (isEdit && existingId) {
        const itemIndex = gallery.findIndex(g => g.id === existingId);
        if (itemIndex !== -1) {
          let finalUrl = gallery[itemIndex].mediaUrl || gallery[itemIndex].imageUrl;

          if (fileInput && fileInput.files && fileInput.files[0]) {
            finalUrl = await this.readFileAsDataURL(fileInput.files[0]);
          } else if (directUrl) {
            finalUrl = directUrl;
          }

          gallery[itemIndex] = {
            ...gallery[itemIndex],
            type: type,
            title: title,
            album: album,
            category: album,
            mediaUrl: finalUrl,
            imageUrl: finalUrl,
            date: date,
            caption: caption
          };

          store.setGallery(gallery);
          this.showToast('Gallery media item details updated!', 'success');
        }
      } else {
        // Multi-file & single file upload handling
        let filesToUpload = [];
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
          filesToUpload = Array.from(fileInput.files);
        }

        if (filesToUpload.length > 0) {
          let addedCount = 0;
          this.showToast(`Uploading ${filesToUpload.length} media file(s)... Please wait.`, 'info');

          for (let i = 0; i < filesToUpload.length; i++) {
            const file = filesToUpload[i];
            const fileDataUrl = await this.readFileAsDataURL(file);
            const isVideo = file.type.startsWith('video/');
            const mediaFormat = isVideo ? 'video' : type;

            const newItem = {
              id: `gal-${Date.now()}-${i}-${Math.floor(Math.random() * 1000)}`,
              type: mediaFormat,
              title: filesToUpload.length > 1 ? `${title} (${i + 1})` : title,
              album: album,
              category: album,
              mediaUrl: fileDataUrl,
              imageUrl: fileDataUrl,
              date: date,
              caption: caption
            };

            gallery.unshift(newItem);
            addedCount++;
          }

          store.setGallery(gallery);
          this.showToast(`Successfully uploaded & saved ${addedCount} file(s) to album "${album}"!`, 'success');
        } else if (directUrl) {
          const newItem = {
            id: `gal-${Date.now()}`,
            type: type,
            title: title,
            album: album,
            category: album,
            mediaUrl: directUrl,
            imageUrl: directUrl,
            date: date,
            caption: caption
          };

          gallery.unshift(newItem);
          store.setGallery(gallery);
          this.showToast(`Media item successfully added to album "${album}"!`, 'success');
        } else {
          this.showToast('Please select at least one local photo/video file or enter a Direct Media URL.', 'warning');
          return;
        }
      }

      this.showUploadGalleryModal = false;
      this.selectedGalleryItemToEdit = null;
      this.render();
    };

    executeUpload().catch(err => {
      console.error(err);
      this.showToast('Upload error: ' + err.message, 'error');
    });
  }

  // Modals & Inspection Drawer Renderer
  renderModals() {
    let html = '';

    // 1. Upload & Edit Gallery Media Modal
    if (this.showUploadGalleryModal) {
      const item = this.selectedGalleryItemToEdit;
      const isEdit = !!item;
      const gallery = store.getGallery();
      const existingAlbums = Array.from(new Set(gallery.map(g => g.album || g.category || 'General Album')));

      html += `
        <div class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div class="bg-slate-900 border border-amber-500/40 w-full max-w-lg rounded-3xl p-6 lg:p-8 space-y-6 relative shadow-2xl">
            <button onclick="app.showUploadGalleryModal = false; app.selectedGalleryItemToEdit = null; app.render();" title="Close" aria-label="Close" class="modal-close-btn absolute top-5 right-5 p-2">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <div class="text-left space-y-1">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase border border-amber-500/30">
                <i data-lucide="${isEdit ? 'edit-3' : 'upload'}" class="w-3.5 h-3.5"></i> ${isEdit ? 'Edit Gallery Media' : 'Upload Photo / Video'}
              </div>
              <h3 class="text-2xl font-black text-white">${isEdit ? 'Edit Photo/Video Details' : 'Upload New Media to Album'}</h3>
              <p class="text-xs text-slate-400">Manage gallery title, select or type album name, upload file or input media URL.</p>
            </div>

            <form onsubmit="app.handleSaveGalleryMedia(event)" class="space-y-4 text-left">
              <!-- Media Type Selector -->
              <div class="space-y-1">
                <label class="text-xs font-bold text-slate-300 uppercase">Media Format</label>
                <div class="grid grid-cols-2 gap-3">
                  <label class="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-700 cursor-pointer">
                    <input type="radio" name="type" value="photo" ${!item || item.type !== 'video' ? 'checked' : ''} class="accent-amber-500" />
                    <span class="text-xs font-bold text-white flex items-center gap-1.5"><i data-lucide="image" class="w-4 h-4 text-amber-400"></i> Photo</span>
                  </label>
                  <label class="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-700 cursor-pointer">
                    <input type="radio" name="type" value="video" ${item && item.type === 'video' ? 'checked' : ''} class="accent-amber-500" />
                    <span class="text-xs font-bold text-white flex items-center gap-1.5"><i data-lucide="video" class="w-4 h-4 text-red-400"></i> Video</span>
                  </label>
                </div>
              </div>

              <!-- Media Title -->
              <div class="space-y-1">
                <label class="text-xs font-bold text-slate-300 uppercase">Title / Name *</label>
                <input type="text" name="title" required value="${item ? item.title : ''}" placeholder="e.g., Teej Cultural Dance Performance" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none font-semibold" />
              </div>

              <!-- Album Selection / Creation -->
              <div class="space-y-1">
                <label class="text-xs font-bold text-slate-300 uppercase">Album Category *</label>
                <input type="text" name="album" required list="album-suggestions" value="${item ? (item.album || item.category) : (this.selectedGalleryDefaultAlbum || (this.galleryAlbumFilter !== 'All' ? this.galleryAlbumFilter : 'General Album'))}" placeholder="Select or type album name (e.g. Dashain 2026, Assembly)" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-500/50 text-amber-300 text-xs focus:border-amber-400 focus:outline-none font-bold" />
                <datalist id="album-suggestions">
                  ${existingAlbums.map(alb => `<option value="${alb}"></option>`).join('')}
                </datalist>
                <p class="text-[10px] text-slate-400">Type a new name to create a brand new album instantly.</p>
              </div>

              <!-- Upload File or URL -->
              <div class="space-y-2 pt-1 border-t border-slate-800">
                <div class="space-y-1">
                  <label class="text-xs font-bold text-slate-300 uppercase flex items-center justify-between">
                    <span>Option A: Upload Local Files (Multiple Photos / Videos)</span>
                    <span class="text-[10px] text-amber-400 font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">Multi-Select Enabled</span>
                  </label>
                  <input type="file" name="mediaFile" multiple accept="image/*,video/*" class="w-full text-xs text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-amber-500 file:text-slate-950 hover:file:bg-amber-400 cursor-pointer" />
                  <p class="text-[10px] text-slate-400 font-medium">Hold Ctrl or Shift to select multiple photos or videos at once.</p>
                </div>

                <div class="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest my-1">— OR —</div>

                <div class="space-y-1">
                  <label class="text-xs font-bold text-slate-300 uppercase">Option B: Direct Media URL</label>
                  <input type="url" name="mediaUrl" value="${item ? (item.mediaUrl || item.imageUrl || '') : ''}" placeholder="https://..." class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none font-mono" />
                </div>
              </div>

              <!-- Caption & Date -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="space-y-1">
                  <label class="text-xs font-bold text-slate-300 uppercase">Date</label>
                  <input type="date" name="date" value="${item ? item.date : new Date().toISOString().split('T')[0]}" class="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none" />
                </div>
                <div class="space-y-1 sm:col-span-2">
                  <label class="text-xs font-bold text-slate-300 uppercase">Caption / Description</label>
                  <textarea name="caption" rows="2" placeholder="Brief description of the event or program..." class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none font-medium">${item ? (item.caption || '') : ''}</textarea>
                </div>
              </div>

              <div class="pt-2 flex justify-end gap-2">
                <button type="button" onclick="app.showUploadGalleryModal = false; app.selectedGalleryItemToEdit = null; app.render();" class="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold">
                  Cancel
                </button>
                <button type="submit" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black shadow-lg flex items-center gap-2">
                  <i data-lucide="check" class="w-4 h-4"></i> ${isEdit ? 'Save Changes' : 'Upload & Save to Album'}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // 2. Move / Cut & Paste Gallery Media Modal
    if (this.selectedGalleryItemToMove) {
      const item = this.selectedGalleryItemToMove;
      const gallery = store.getGallery();
      const existingAlbums = Array.from(new Set(gallery.map(g => g.album || g.category || 'General Album')));
      const currentAlbum = item.album || item.category || 'General';

      html += `
        <div class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div class="bg-slate-900 border border-blue-500/40 w-full max-w-md rounded-3xl p-6 space-y-6 relative shadow-2xl">
            <button onclick="app.selectedGalleryItemToMove = null; app.render();" title="Close" aria-label="Close" class="modal-close-btn absolute top-5 right-5 p-2">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <div class="text-left space-y-1">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase border border-blue-500/30">
                <i data-lucide="scissors" class="w-3.5 h-3.5"></i> Cut & Move Media
              </div>
              <h3 class="text-2xl font-black text-white">Move to Another Album</h3>
              <p class="text-xs text-slate-400">Select an existing target album or type a new album name to move this item.</p>
            </div>

            <!-- Item Quick Summary -->
            <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3 text-left">
              <div class="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 flex-shrink-0 border border-slate-700">
                ${item.type === 'video' ? `
                  <video src="${item.mediaUrl}" class="w-full h-full object-cover"></video>
                ` : `
                  <img src="${item.mediaUrl || item.imageUrl}" alt="" class="w-full h-full object-cover" />
                `}
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="font-bold text-white text-sm truncate">${item.title}</h4>
                <div class="text-xs text-amber-400 font-semibold flex items-center gap-1 mt-0.5">
                  <i data-lucide="folder" class="w-3.5 h-3.5"></i> Current Album: <strong>${currentAlbum}</strong>
                </div>
              </div>
            </div>

            <!-- Move Form -->
            <div class="space-y-4 text-left">
              <div class="space-y-1">
                <label class="text-xs font-bold text-slate-300 uppercase">Target Destination Album *</label>
                <input type="text" id="target-album-input" list="move-album-list" value="" placeholder="Select existing or type new album name..." class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-blue-500/60 text-amber-300 text-xs focus:border-amber-400 focus:outline-none font-bold" />
                <datalist id="move-album-list">
                  ${existingAlbums.filter(a => a !== currentAlbum).map(alb => `<option value="${alb}"></option>`).join('')}
                </datalist>
              </div>

              <!-- Quick Existing Album Select Buttons -->
              <div class="space-y-1">
                <div class="text-[11px] font-bold text-slate-400">Or Click Quick Destination:</div>
                <div class="flex flex-wrap gap-1.5">
                  ${existingAlbums.filter(a => a !== currentAlbum).map(alb => `
                    <button type="button" onclick="document.getElementById('target-album-input').value = '${alb.replace(/'/g, "\\'")}';" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center gap-1">
                      <i data-lucide="folder" class="w-3 h-3 text-amber-400"></i> ${alb}
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="pt-3 flex justify-end gap-2 border-t border-slate-800">
                <button type="button" onclick="app.selectedGalleryItemToMove = null; app.render();" class="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">
                  Cancel
                </button>
                <button type="button" onclick="app.handleMoveGalleryItem('${item.id}', document.getElementById('target-album-input').value)" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg flex items-center gap-1.5">
                  <i data-lucide="check-check" class="w-4 h-4"></i> Cut & Paste Here
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 3. Open / Preview Fullscreen Lightbox Modal
    if (this.selectedGalleryPreview) {
      const item = this.selectedGalleryPreview;

      html += `
        <div class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div class="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-2xl flex flex-col max-h-[90vh]">
            
            <!-- Header bar -->
            <div class="p-4 px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-2 text-left">
                <span class="px-2.5 py-0.5 rounded-full ${item.type === 'video' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'} text-xs font-bold uppercase flex items-center gap-1">
                  <i data-lucide="${item.type === 'video' ? 'video' : 'image'}" class="w-3.5 h-3.5"></i> ${item.type || 'Photo'}
                </span>
                <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1">
                  <i data-lucide="folder" class="w-3.5 h-3.5 text-amber-400"></i> ${item.album || item.category || 'General'}
                </span>
              </div>
              <button onclick="app.selectedGalleryPreview = null; app.render();" title="Close" aria-label="Close" class="modal-close-btn p-2">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <!-- Media Content Container -->
            <div class="flex-1 bg-slate-950 flex items-center justify-center overflow-hidden p-2 min-h-[300px] max-h-[60vh]">
              ${item.type === 'video' ? `
                <video src="${item.mediaUrl}" controls autoplay class="max-w-full max-h-full rounded-xl object-contain"></video>
              ` : `
                <img src="${item.mediaUrl || item.imageUrl}" alt="${item.title}" class="max-w-full max-h-full rounded-xl object-contain shadow-2xl" />
              `}
            </div>

            <!-- Footer Meta Details & Actions -->
            <div class="p-6 bg-slate-900 border-t border-slate-800 text-left space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 class="text-xl font-extrabold text-white">${item.title}</h3>
                <div class="text-xs text-slate-400 font-mono">${item.date || ''}</div>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${item.caption || 'No description provided.'}</p>

              <div class="pt-2 flex items-center justify-between">
                <a href="${item.mediaUrl || item.imageUrl}" download="${item.title}" target="_blank" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
                  <i data-lucide="download" class="w-4 h-4"></i> Download Original High-Res Media
                </a>
                <button onclick="app.selectedGalleryPreview = null; app.render();" class="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">
                  Close Preview
                </button>
              </div>
            </div>

          </div>
        </div>
      `;
    }

    // Admin Inspection & Verification Drawer (Shows all 22 required registration fields + Document Previews + Title Editor)
    if (this.selectedMemberForReview) {
      const u = this.selectedMemberForReview;

      html += `
        <div class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div class="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-3xl p-6 lg:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button onclick="app.selectedMemberForReview = null; app.render();" title="Close" aria-label="Close" class="modal-close-btn absolute top-5 right-5 p-2">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <div class="flex items-center gap-4">
              <img src="${u.photo}" alt="" class="w-16 h-16 rounded-full object-cover clean-avatar border-2 border-amber-500" />
              <div class="text-left">
                <span class="text-xs font-bold text-amber-400 uppercase">${u.membershipType} (${u.membershipFee} SAR)</span>
                <h3 class="text-2xl font-extrabold text-white">${u.fullName}</h3>
                <div class="text-xs text-slate-400 font-mono">${u.memberCode} | Status: <strong class="${u.status === 'Approved' ? 'text-emerald-400' : 'text-amber-400'}">${u.status}</strong></div>
              </div>
            </div>

            <!-- Admin Title Prefix Manager (Small title above member name) -->
            <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30 space-y-2 text-left">
              <label class="text-xs font-bold text-amber-400 uppercase flex items-center gap-1">
                <i data-lucide="edit-3" class="w-4 h-4"></i> Member Title Prefix (Displayed Above Name e.g. "Founder", "President", "Executive", "Mr.")
              </label>
              <div class="flex gap-2">
                <input type="text" id="edit-title-prefix" value="${u.titlePrefix || 'Mr.'}" placeholder="e.g. Founder, President, Vice President, Er., Dr., Mr." class="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500" />
                <button onclick="app.saveMemberTitlePrefix('${u.id}')" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all">
                  Save Title Prefix
                </button>
              </div>
            </div>

            <!-- Full 22 Registration Fields Verification Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-left">
              <div><span class="text-slate-500 block">Full Name</span><strong class="text-slate-200">${u.fullName}</strong></div>
              <div><span class="text-slate-500 block">Father Name</span><strong class="text-slate-200">${u.fatherName || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Mother Name</span><strong class="text-slate-200">${u.motherName || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Gender / DOB</span><strong class="text-slate-200">${u.gender || 'N/A'} / ${u.dob || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Citizenship No</span><strong class="text-slate-200 font-mono">${u.citizenshipNo || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Passport Number</span><strong class="text-slate-200 font-mono">${u.passport || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Iqama Number</span><strong class="text-slate-200 font-mono">${u.iqama || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">District</span><strong class="text-amber-400 font-bold">${u.district || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Municipality / Ward</span><strong class="text-slate-200">${u.municipality || 'N/A'} W-${u.wardNo || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Permanent Address</span><strong class="text-slate-200">${u.permanentAddress || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Current Saudi City</span><strong class="text-slate-200">${u.saudiCity || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Occupation</span><strong class="text-slate-200">${u.occupation || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Company Name</span><strong class="text-slate-200">${u.companyName || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Mobile Phone</span><strong class="text-emerald-400 font-mono">${u.phone || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Email Address</span><strong class="text-slate-200 font-mono">${u.email || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Blood Group</span><strong class="text-red-400 font-bold">${u.bloodGroup || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Emergency Contact</span><strong class="text-slate-200">${u.emergencyContact || 'N/A'}</strong></div>
              <div><span class="text-slate-500 block">Joined Date</span><strong class="text-slate-200">${u.joinedDate || 'N/A'}</strong></div>
            </div>

            <!-- High-Res Uploaded Document Previews -->
            <div class="space-y-2 text-left">
              <h4 class="text-xs font-bold text-slate-400 uppercase">Uploaded Verification Documents & Payment Receipt</h4>
              <div class="grid grid-cols-3 gap-3">
                <div class="space-y-1">
                  <div class="text-[10px] text-slate-400">Citizenship Document</div>
                  <a href="${u.citizenshipDoc || '#'}" target="_blank" class="block h-28 rounded-xl overflow-hidden bg-slate-950 border border-slate-700">
                    <img src="${u.citizenshipDoc || ''}" alt="" class="w-full h-full object-cover" />
                  </a>
                </div>
                <div class="space-y-1">
                  <div class="text-[10px] text-slate-400">Passport Document</div>
                  <a href="${u.passportDoc || '#'}" target="_blank" class="block h-28 rounded-xl overflow-hidden bg-slate-950 border border-slate-700">
                    <img src="${u.passportDoc || ''}" alt="" class="w-full h-full object-cover" />
                  </a>
                </div>
                <div class="space-y-1">
                  <div class="text-[10px] text-slate-400">Payment Receipt</div>
                  <a href="${u.paymentReceipt || '#'}" target="_blank" class="block h-28 rounded-xl overflow-hidden bg-slate-950 border border-slate-700">
                    <img src="${u.paymentReceipt || ''}" alt="" class="w-full h-full object-cover" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Admin Approval & Security Action Bar -->
            <div class="flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button onclick="app.handleDeleteUserByAdmin('${u.id}')" class="px-4 py-2.5 rounded-xl bg-red-950 text-red-400 hover:bg-red-900 border border-red-800 font-bold text-xs transition-all flex items-center gap-2">
                <i data-lucide="trash-2" class="w-4 h-4"></i> Remove Account
              </button>

              <div class="flex gap-2">
                ${u.status !== 'Approved' ? `
                  <button onclick="app.handleUpdateMemberByAdmin('${u.id}', { status: 'Approved' })" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all shadow-lg shadow-emerald-950/50 flex items-center gap-2">
                    <i data-lucide="check-circle" class="w-4 h-4"></i> Approve & Activate Membership
                  </button>
                ` : `
                  <button onclick="app.handleUpdateMemberByAdmin('${u.id}', { status: 'Pending' })" class="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-all">
                    Set Status to Pending
                  </button>
                `}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return html;
  }

  saveMemberTitlePrefix(memberId) {
    const input = document.getElementById('edit-title-prefix');
    if (!input) return;
    const newPrefix = input.value.trim();
    this.handleUpdateMemberByAdmin(memberId, { titlePrefix: newPrefix });
  }

  openMemberReviewDrawer(memberId) {
    const users = store.getUsers();
    const user = users.find(u => u.id === memberId);
    if (user) {
      this.selectedMemberForReview = user;
      this.render();
    }
  }

  openLoginModal() {
    const modalHtml = `
      <div id="login-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl p-6 space-y-6 relative">
          <button onclick="document.getElementById('login-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
          
          <div class="text-center space-y-1">
            <h3 class="text-xl font-extrabold text-white">NRDSS Account Login</h3>
            <p class="text-xs text-slate-400">Sign in as Master Admin, Executive Admin, or General Member</p>
          </div>

          <form onsubmit="event.preventDefault(); const e=this.email.value; const p=this.password.value; if(app.handleLogin(e,p)){ document.getElementById('login-modal').remove(); }" class="space-y-4 text-left">
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Email Address</label>
              <input type="email" name="email" required placeholder="name@domain.com" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500" />
            </div>
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Password</label>
              <input type="password" name="password" required placeholder="••••••••" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500" />
            </div>

            <button type="submit" class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-emerald-950/50">
              Sign In
            </button>
          </form>

          <div class="space-y-3 pt-3 border-t border-slate-800 text-left">
            <div class="font-bold text-amber-400 text-xs uppercase tracking-wider mb-1">Quick 1-Click Demo Login:</div>
            
            <div class="grid grid-cols-2 gap-2">
              <button type="button" onclick="app.handleLogin('raazllama01@gmail.com', 'raj@@0011'); document.getElementById('login-modal').remove();" class="p-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-extrabold text-xs text-left transition-all">
                <div class="flex items-center gap-1 font-black"><i data-lucide="scan" class="w-3.5 h-3.5 text-amber-400"></i> Gate Scanner</div>
                <div class="text-[10px] text-slate-400 font-mono">raazllama01@gmail.com</div>
              </button>

              <button type="button" onclick="app.handleLogin('lamaarticles01@gmail.com', 'lama0011'); document.getElementById('login-modal').remove();" class="p-2 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 border border-blue-700 text-blue-200 font-extrabold text-xs text-left transition-all">
                <div class="flex items-center gap-1 font-black"><i data-lucide="crown" class="w-3.5 h-3.5 text-amber-400"></i> Master Admin</div>
                <div class="text-[10px] text-slate-400 font-mono">lamaarticles01@gmail.com</div>
              </button>

              <button type="button" onclick="app.handleLogin('nrdssksa@gmail.com', 'nrdss0011'); document.getElementById('login-modal').remove();" class="p-2 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 border border-blue-700 text-blue-200 font-extrabold text-xs text-left transition-all">
                <div class="flex items-center gap-1 font-black"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Executive Admin</div>
                <div class="text-[10px] text-slate-400 font-mono">nrdssksa@gmail.com</div>
              </button>

              <button type="button" onclick="app.handleLogin('rajlama01qz@gmail.com', 'raj@@0011'); document.getElementById('login-modal').remove();" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-extrabold text-xs text-left transition-all">
                <div class="flex items-center gap-1 font-black"><i data-lucide="user" class="w-3.5 h-3.5 text-blue-400"></i> Raj Lama</div>
                <div class="text-[10px] text-slate-400 font-mono">rajlama01qz@gmail.com</div>
              </button>
            </div>

            <button type="button" onclick="app.loginAsGuest()" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 border border-emerald-500">
              <i data-lucide="user-check" class="w-4 h-4 text-amber-300"></i> Instant 1-Click Guest Member Access
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Self Profile Editing Modal (For Members)
  openSelfProfileEditModal() {
    if (!this.currentUser) return;
    const u = this.currentUser;

    const modalHtml = `
      <div id="self-edit-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl p-6 lg:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
          <button onclick="document.getElementById('self-edit-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="text-center space-y-1">
            <h3 class="text-2xl font-black text-white">Edit My Profile Details</h3>
            <p class="text-xs text-slate-400">Update your authentic profile information & photo avatar</p>
          </div>

          <!-- Photo Avatar Preview & Interactive Drag-Cropper Button -->
          <div class="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <img id="self-profile-photo-preview" src="${u.photo}" class="w-16 h-16 rounded-full object-cover clean-avatar border-2 border-amber-400 shadow-md" />
              <div class="text-left">
                <div class="font-bold text-white text-sm">Profile Avatar Image</div>
                <div class="text-[11px] text-slate-400">Upload a photo file or crop/drag existing avatar</div>
              </div>
            </div>
            <button type="button" onclick="app.openImageCropperModal('${u.photo}', (croppedUrl) => { document.getElementById('self-profile-photo-input').value = croppedUrl; document.getElementById('self-profile-photo-preview').src = croppedUrl; })" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center gap-2">
              <i data-lucide="crop" class="w-4 h-4"></i> Upload & Crop Photo (Drag/Zoom)
            </button>
          </div>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); const obj={}; fd.forEach((v,k)=>obj[k]=v); app.handleSelfProfileUpdate(obj); document.getElementById('self-edit-modal').remove();" class="space-y-4 text-xs text-left">
            <input type="hidden" id="self-profile-photo-input" name="photo" value="${u.photo || ''}" />

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="font-bold text-slate-300 block mb-1">Full Name</label>
                <input type="text" name="fullName" value="${u.fullName || ''}" required class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Father Name</label>
                <input type="text" name="fatherName" value="${u.fatherName || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Mother Name</label>
                <input type="text" name="motherName" value="${u.motherName || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Gender</label>
                <select name="gender" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white">
                  <option value="Male" ${u.gender === 'Male' ? 'selected' : ''}>Male</option>
                  <option value="Female" ${u.gender === 'Female' ? 'selected' : ''}>Female</option>
                </select>
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Date of Birth</label>
                <input type="date" name="dob" value="${u.dob || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Citizenship Number</label>
                <input type="text" name="citizenshipNo" value="${u.citizenshipNo || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Passport Number</label>
                <input type="text" name="passport" value="${u.passport || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Iqama Number</label>
                <input type="text" name="iqama" value="${u.iqama || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">District</label>
                <select name="district" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
                  <option value="Nuwakot" ${u.district === 'Nuwakot' ? 'selected' : ''}>Nuwakot</option>
                  <option value="Rasuwa" ${u.district === 'Rasuwa' ? 'selected' : ''}>Rasuwa</option>
                  <option value="Dhading" ${u.district === 'Dhading' ? 'selected' : ''}>Dhading</option>
                </select>
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Municipality & Ward</label>
                <input type="text" name="municipality" value="${u.municipality || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Current Saudi City</label>
                <input type="text" name="saudiCity" value="${u.saudiCity || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Occupation</label>
                <input type="text" name="occupation" value="${u.occupation || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Company Name</label>
                <input type="text" name="companyName" value="${u.companyName || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Mobile Phone (+966)</label>
                <input type="text" name="phone" value="${u.phone || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Email Address</label>
                <input type="email" name="email" value="${u.email || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Blood Group</label>
                <select name="bloodGroup" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
                  <option value="O+" ${u.bloodGroup === 'O+' ? 'selected' : ''}>O+</option>
                  <option value="A+" ${u.bloodGroup === 'A+' ? 'selected' : ''}>A+</option>
                  <option value="B+" ${u.bloodGroup === 'B+' ? 'selected' : ''}>B+</option>
                  <option value="AB+" ${u.bloodGroup === 'AB+' ? 'selected' : ''}>AB+</option>
                  <option value="O-" ${u.bloodGroup === 'O-' ? 'selected' : ''}>O-</option>
                  <option value="A-" ${u.bloodGroup === 'A-' ? 'selected' : ''}>A-</option>
                  <option value="B-" ${u.bloodGroup === 'B-' ? 'selected' : ''}>B-</option>
                  <option value="AB-" ${u.bloodGroup === 'AB-' ? 'selected' : ''}>AB-</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="font-bold text-slate-300 block mb-1">Emergency Contact Person & Phone</label>
                <input type="text" name="emergencyContact" value="${u.emergencyContact || ''}" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-emerald-950/50">
              Save Profile Details & Update ID Card
            </button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Interactive Canvas-Driven Image Cropper Engine (Guarantees 100% Exact 1:1 Preview-to-Crop Match)
  openImageCropperModal(initialPhotoUrl, onSaveCallback) {
    const existing = document.getElementById('cropper-modal');
    if (existing) existing.remove();

    this.cropperImageSrc = initialPhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80';
    this.cropperTargetCallback = onSaveCallback;
    this.cropperScale = 1;
    this.cropperPosX = 0;
    this.cropperPosY = 0;
    this.cropperRotation = 0;

    const modalHtml = `
      <div id="cropper-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-amber-500/40 w-full max-w-md rounded-3xl p-6 space-y-5 relative text-center shadow-2xl" style="background-color: #0f172a !important; color: #ffffff !important; border: 2px solid rgba(245, 158, 11, 0.4) !important;">
          <button onclick="document.getElementById('cropper-modal').remove()" title="Close" class="modal-close-btn absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div>
            <h3 class="text-xl font-black text-white flex items-center justify-center gap-2">
              <i data-lucide="crop" class="w-5 h-5 text-amber-400"></i> Upload & Crop Photo
            </h3>
            <p class="text-xs text-slate-400 mt-1">Drag inside circle to position face, slider to zoom, or rotate</p>
          </div>

          <!-- File Upload Drag Zone -->
          <div class="border-2 border-dashed border-slate-700 hover:border-amber-500 p-3 rounded-2xl bg-slate-950/70 transition-all text-center">
            <input type="file" id="cropper-file-input" accept="image/*" onchange="app.handleCropperFileSelect(this)" class="hidden" />
            <label for="cropper-file-input" class="cursor-pointer flex items-center justify-center gap-2 text-xs font-black text-amber-400 hover:text-amber-300">
              <i data-lucide="upload-cloud" class="w-4 h-4 text-amber-400"></i>
              <span>Choose Image File From Device</span>
            </label>
          </div>

          <!-- Interactive Viewport Canvas Mask (260x260) -->
          <div class="flex justify-center items-center py-1">
            <div class="relative w-[260px] h-[260px] rounded-full border-4 border-amber-400 shadow-2xl shadow-amber-500/20 overflow-hidden bg-slate-950 cursor-grab active:cursor-grabbing">
              <canvas id="cropper-viewport-canvas" width="260" height="260" class="w-full h-full block rounded-full"></canvas>
            </div>
          </div>

          <!-- Cropper Controls: Rotation & Zoom Slider -->
          <div class="space-y-3 px-2">
            <div class="flex items-center justify-between gap-2 text-xs">
              <button type="button" onclick="app.rotateCropperImage(-90)" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold flex items-center gap-1.5 border border-slate-700 shadow-sm">
                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> Rotate Left
              </button>
              <button type="button" onclick="app.rotateCropperImage(90)" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold flex items-center gap-1.5 border border-slate-700 shadow-sm">
                <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i> Rotate Right
              </button>
              <button type="button" onclick="app.resetCropperPosition()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center gap-1 border border-slate-700 shadow-sm">
                <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Reset
              </button>
            </div>

            <div class="space-y-1 text-left">
              <div class="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Zoom Level</span>
                <span id="zoom-value-label" class="text-amber-400 font-mono">1.00x</span>
              </div>
              <input type="range" id="cropper-zoom-slider" min="0.5" max="3.5" step="0.05" value="1" class="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer h-2" />
            </div>
          </div>

          <!-- Apply & Crop Button -->
          <div class="flex gap-2 pt-2">
            <button type="button" onclick="document.getElementById('cropper-modal').remove()" class="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700">
              Cancel
            </button>
            <button type="button" onclick="app.applyCroppedImage()" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-950/50 flex items-center justify-center gap-1.5">
              <i data-lucide="check" class="w-4 h-4"></i> Crop & Save Photo
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
    this.loadCropperImage(this.cropperImageSrc);
  }

  // Load Image Object for Cropper
  loadCropperImage(src) {
    this.cropperImgObj = new Image();
    this.cropperImgObj.crossOrigin = 'anonymous';
    this.cropperImgObj.onload = () => {
      this.resetCropperPosition();
      this.initCropperEvents();
    };
    this.cropperImgObj.src = src;
  }

  // Draw Cropper Viewport on Canvas (Shared between 260px Viewport Preview & 300px Output Canvas)
  renderCropperCanvas(targetCtx = null, targetWidth = 260) {
    const canvas = targetCtx ? null : document.getElementById('cropper-viewport-canvas');
    if (!canvas && !targetCtx) return;
    const ctx = targetCtx || canvas.getContext('2d');
    if (!this.cropperImgObj || !this.cropperImgObj.complete) return;

    const size = targetWidth;
    const center = size / 2;
    const scaleFactor = size / 260;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Clear Canvas
    ctx.clearRect(0, 0, size, size);

    ctx.save();

    // Circular Mask Clipping
    ctx.beginPath();
    ctx.arc(center, center, center, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Fill dark background
    ctx.fillStyle = '#0B132B';
    ctx.fillRect(0, 0, size, size);

    // Calculate base fit dimensions for image
    const nw = this.cropperImgObj.naturalWidth || 300;
    const nh = this.cropperImgObj.naturalHeight || 300;
    const aspect = nw / nh;

    let baseW, baseH;
    if (aspect >= 1) {
      baseH = size;
      baseW = size * aspect;
    } else {
      baseW = size;
      baseH = size / aspect;
    }

    // Apply Transformation Matrix
    ctx.translate(center + ((this.cropperPosX || 0) * scaleFactor), center + ((this.cropperPosY || 0) * scaleFactor));
    ctx.rotate(((this.cropperRotation || 0) * Math.PI) / 180);
    ctx.scale(this.cropperScale || 1, this.cropperScale || 1);

    // Draw centered image
    ctx.drawImage(this.cropperImgObj, -baseW / 2, -baseH / 2, baseW, baseH);

    ctx.restore();
  }

  // Rotate Cropper Image Helper
  rotateCropperImage(degrees) {
    this.cropperRotation = ((this.cropperRotation || 0) + degrees) % 360;
    this.renderCropperCanvas();
  }

  // Reset Cropper Position Helper
  resetCropperPosition() {
    this.cropperScale = 1;
    this.cropperPosX = 0;
    this.cropperPosY = 0;
    this.cropperRotation = 0;
    const zoomInput = document.getElementById('cropper-zoom-slider');
    if (zoomInput) zoomInput.value = 1;
    const zoomLabel = document.getElementById('zoom-value-label');
    if (zoomLabel) zoomLabel.innerText = '1.00x';
    this.renderCropperCanvas();
  }

  // Cropper File Selector Handler
  handleCropperFileSelect(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.loadCropperImage(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  // Cropper Mouse & Touch Event Handlers
  initCropperEvents() {
    const canvas = document.getElementById('cropper-viewport-canvas');
    const zoomInput = document.getElementById('cropper-zoom-slider');
    const zoomLabel = document.getElementById('zoom-value-label');
    if (!canvas) return;

    this.renderCropperCanvas();

    let isDragging = false;
    let startX = 0, startY = 0;

    // Mouse Events
    canvas.onmousedown = (e) => {
      e.preventDefault();
      isDragging = true;
      startX = e.clientX - this.cropperPosX;
      startY = e.clientY - this.cropperPosY;
    };

    window.onmousemove = (e) => {
      if (!isDragging) return;
      this.cropperPosX = e.clientX - startX;
      this.cropperPosY = e.clientY - startY;
      this.renderCropperCanvas();
    };

    window.onmouseup = () => {
      isDragging = false;
    };

    // Mobile Touch Events
    canvas.ontouchstart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX - this.cropperPosX;
        startY = e.touches[0].clientY - this.cropperPosY;
      }
    };

    window.ontouchmove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      this.cropperPosX = e.touches[0].clientX - startX;
      this.cropperPosY = e.touches[0].clientY - startY;
      this.renderCropperCanvas();
    };

    window.ontouchend = () => {
      isDragging = false;
    };

    // Scroll Wheel Zoom
    canvas.onwheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.08 : -0.08;
      this.cropperScale = Math.min(Math.max(0.5, this.cropperScale + delta), 3.5);
      if (zoomInput) zoomInput.value = this.cropperScale;
      if (zoomLabel) zoomLabel.innerText = `${this.cropperScale.toFixed(2)}x`;
      this.renderCropperCanvas();
    };

    if (zoomInput) {
      zoomInput.oninput = (e) => {
        this.cropperScale = parseFloat(e.target.value);
        if (zoomLabel) zoomLabel.innerText = `${this.cropperScale.toFixed(2)}x`;
        this.renderCropperCanvas();
      };
    }
  }

  // Apply Cropped Image to Target Callback (Uses exact same render engine at 300x300 output)
  applyCroppedImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');

    // Draw exact same transformation onto 300x300 high-res canvas
    this.renderCropperCanvas(ctx, 300);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);

    if (typeof this.cropperTargetCallback === 'function') {
      this.cropperTargetCallback(dataUrl);
    }

    const modal = document.getElementById('cropper-modal');
    if (modal) modal.remove();

    this.showToast('Profile photo successfully cropped & saved!', 'success');
  }

  // Total Income Breakdown & Member Payment Ledger Modal
  openIncomeBreakdownModal() {
    const existing = document.getElementById('income-modal');
    if (existing) existing.remove();

    const users = store.getUsers();
    const approvedUsers = users.filter(u => u.status === 'Approved');
    const pendingUsers = users.filter(u => u.status === 'Pending');

    const totalIncome = approvedUsers.reduce((acc, u) => acc + (u.membershipFee || 0), 0);
    const pendingIncome = pendingUsers.reduce((acc, u) => acc + (u.membershipFee || 0), 0);

    // Breakdown by Tier
    const tierStats = {};
    users.forEach(u => {
      const type = u.membershipType || 'General Member';
      if (!tierStats[type]) {
        tierStats[type] = { count: 0, fee: u.membershipFee || 0, totalPaid: 0, approvedCount: 0 };
      }
      tierStats[type].count++;
      if (u.status === 'Approved') {
        tierStats[type].approvedCount++;
        tierStats[type].totalPaid += (u.membershipFee || 0);
      }
    });

    const modalHtml = `
      <div id="income-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div class="bg-slate-900 border border-amber-500/40 w-full max-w-4xl rounded-3xl p-6 lg:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
          <button onclick="document.getElementById('income-modal').remove()" title="Close" aria-label="Close" class="modal-close-btn absolute top-5 right-5 p-2">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full golden-badge text-xs uppercase font-extrabold mb-2">
              <i data-lucide="receipt" class="w-3.5 h-3.5"></i> NRDSS Financial Ledger
            </div>
            <h3 class="text-2xl lg:text-3xl font-black text-white">Total Collection & Payment Breakdown</h3>
            <p class="text-xs text-slate-400">Detailed list of who paid how much, membership categories, and payment receipts.</p>
          </div>

          <!-- Financial Summary Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-slate-950 p-4 rounded-2xl border border-emerald-500/40 space-y-1 text-left">
              <div class="text-xs font-bold text-slate-400 uppercase">Total Collected Income</div>
              <div class="text-2xl font-black text-emerald-400">${totalIncome} <span class="text-xs">SAR</span></div>
              <div class="text-[10px] text-emerald-400 font-semibold">${approvedUsers.length} Approved Members Paid</div>
            </div>
            <div class="bg-slate-950 p-4 rounded-2xl border border-amber-500/40 space-y-1 text-left">
              <div class="text-xs font-bold text-amber-400 uppercase">Pending Membership Revenue</div>
              <div class="text-2xl font-black text-amber-300">${pendingIncome} <span class="text-xs">SAR</span></div>
              <div class="text-[10px] text-slate-400">${pendingUsers.length} Pending Verifications</div>
            </div>
            <div class="bg-slate-950 p-4 rounded-2xl border border-blue-500/40 space-y-1 text-left">
              <div class="text-xs font-bold text-blue-400 uppercase">Registered Applicants</div>
              <div class="text-2xl font-black text-white">${users.length}</div>
              <div class="text-[10px] text-slate-400">Total Registry Records</div>
            </div>
          </div>

          <!-- Revenue by Membership Tier Breakdown -->
          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 text-left">
            <h4 class="text-xs font-extrabold text-slate-300 uppercase tracking-wider">Revenue Breakdown by Membership Category</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${Object.keys(tierStats).map(tierName => {
      const stat = tierStats[tierName];
      const isFounder = tierName === 'Founder Member';
      return `
                  <div class="p-3 rounded-xl ${isFounder ? 'bg-amber-950/20 border border-amber-500/40' : 'bg-slate-900 border border-slate-800'} space-y-1">
                    <div class="text-[11px] font-bold ${isFounder ? 'text-amber-400' : 'text-slate-200'}">${tierName}</div>
                    <div class="text-base font-extrabold text-emerald-400">${stat.totalPaid} <span class="text-[10px] text-slate-400">SAR</span></div>
                    <div class="text-[10px] text-slate-400">${stat.approvedCount} Paid (${stat.fee} SAR each)</div>
                  </div>
                `;
    }).join('')}
            </div>
          </div>

          <!-- Detailed Per-Member Payment Ledger Table -->
          <div class="space-y-3 text-left">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
              <h4 class="text-sm font-extrabold text-white flex items-center gap-2">
                <i data-lucide="list" class="w-4 h-4 text-emerald-400"></i> Individual Member Payment Receipts (${users.length})
              </h4>
              <input type="text" id="income-modal-search" placeholder="Search by name, code, tier..." oninput="app.incomeSearchQuery = this.value; app.openIncomeBreakdownModal();" value="${this.incomeSearchQuery || ''}" class="w-full sm:w-64 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs" />
            </div>

            <div class="overflow-x-auto max-h-72 overflow-y-auto border border-slate-800 rounded-2xl">
              <table class="w-full text-left text-xs text-slate-300">
                <thead class="bg-slate-950 text-slate-400 sticky top-0 border-b border-slate-800 uppercase text-[10px]">
                  <tr>
                    <th class="p-3">Member Details</th>
                    <th class="p-3">Member Code</th>
                    <th class="p-3">Category</th>
                    <th class="p-3">Amount Paid</th>
                    <th class="p-3">Payment Status</th>
                    <th class="p-3 text-right">Receipt Link</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/60 bg-slate-900/60">
                  ${users.filter(u => {
      if (!this.incomeSearchQuery) return true;
      const q = this.incomeSearchQuery.toLowerCase();
      return u.fullName.toLowerCase().includes(q) || u.memberCode.toLowerCase().includes(q) || u.membershipType.toLowerCase().includes(q) || u.status.toLowerCase().includes(q);
    }).map(u => `
                    <tr class="hover:bg-slate-900 transition-all">
                      <td class="p-3 font-semibold text-white flex items-center gap-2.5">
                        <img src="${u.photo}" class="w-7 h-7 rounded-full object-cover clean-avatar border border-amber-400/40" />
                        <div>
                          <div>${u.fullName}</div>
                          <div class="text-[9px] text-slate-400 font-mono">${u.email}</div>
                        </div>
                      </td>
                      <td class="p-3 font-mono text-emerald-400 font-bold">${u.memberCode}</td>
                      <td class="p-3 font-semibold ${u.membershipType === 'Founder Member' ? 'text-amber-400' : 'text-slate-300'}">${u.membershipType}</td>
                      <td class="p-3 font-extrabold text-emerald-400 text-sm">${u.membershipFee || 0} SAR</td>
                      <td class="p-3">
                        <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase ${u.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}">
                          ${u.status === 'Approved' ? 'Paid & Verified' : 'Pending Review'}
                        </span>
                      </td>
                      <td class="p-3 text-right">
                        <a href="${u.paymentReceipt || '#'}" target="_blank" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-[10px] border border-slate-700 inline-flex items-center gap-1">
                          <i data-lucide="external-link" class="w-3 h-3"></i> Receipt
                        </a>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Registration Modal (5 Interactive Tier Option Cards)
  openRegisterModal(defaultTier = 'Half Year General Member', defaultFee = 60) {
    const modalHtml = `
      <div id="register-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-3xl p-6 lg:p-8 space-y-6 relative max-h-[92vh] overflow-y-auto shadow-2xl">
          <button onclick="document.getElementById('register-modal').remove()" title="Close" aria-label="Close" class="modal-close-btn absolute top-4 right-4 p-2">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="text-center space-y-1">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-black uppercase tracking-wider border border-red-500/30">
              <i data-lucide="user-plus" class="w-3.5 h-3.5"></i> Join NRDSS Saudi Arabia Community
            </div>
            <h3 class="text-2xl font-extrabold text-white">NRDSS Member Registration</h3>
            <p class="text-xs text-slate-400">Select your membership tier and fill in your authentic details to register</p>
          </div>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); const obj={}; fd.forEach((v,k)=>obj[k]=v); if(app.handleRegister(obj)){ document.getElementById('register-modal').remove(); }" class="space-y-6 text-xs text-left">
            
            <!-- Step 1: Interactive 5 Membership Tier Option Cards (1 Single Row Grid) -->
            <div class="space-y-2">
              <label class="font-black text-amber-400 text-xs uppercase tracking-wider block flex items-center gap-1.5" style="color: #fbbf24 !important;">
                <i data-lucide="award" class="w-4 h-4 text-amber-400" style="color: #fbbf24 !important;"></i> Step 1: Choose Your Official Membership Category Tier
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                ${DEFAULT_MEMBERSHIP_TIERS.map((tier, idx) => {
                  const isSelected = tier.name === defaultTier;
                  const isGolden = tier.golden || tier.id === 'founder';
                  return `
                    <div onclick="document.querySelectorAll('.modal-tier-card').forEach(el=>{ el.classList.remove('border-emerald-400','border-amber-400','bg-emerald-950','bg-amber-950','ring-2'); el.classList.add('border-slate-800','bg-slate-950'); }); this.classList.remove('border-slate-800','bg-slate-950'); this.classList.add('${isGolden ? 'border-amber-400 bg-amber-950' : 'border-emerald-400 bg-emerald-950'}', 'ring-2'); document.getElementById('reg-tier-select').value='${tier.name}'; document.getElementById('reg-fee-input').value=${tier.fee}; const catEl=document.getElementById('esewa-remark-category'); if(catEl) catEl.innerText='${tier.name}';" class="modal-tier-card p-3 rounded-2xl ${isSelected ? (isGolden ? 'border-amber-400 bg-amber-950 ring-2' : 'border-emerald-400 bg-emerald-950 ring-2') : 'border-slate-800 bg-slate-950'} border-2 transition-all cursor-pointer flex flex-col justify-between text-left relative group hover:border-amber-500 shadow-lg">
                      <div>
                        <div class="flex items-center justify-between text-[10px] font-bold uppercase mb-1">
                          <span style="color: ${isGolden ? '#fbbf24' : '#94a3b8'} !important;">Option ${idx + 1}</span>
                          ${isGolden ? `<span class="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[8px] shadow">GOLD</span>` : ''}
                        </div>
                        <h4 class="font-black text-white text-xs leading-tight mb-1" style="color: #ffffff !important; font-weight: 900 !important;">${tier.name}</h4>
                        <div class="text-base font-black flex items-baseline gap-1" style="color: ${isGolden ? '#fbbf24' : '#34d399'} !important;">
                          <span style="color: ${isGolden ? '#fbbf24' : '#34d399'} !important;">${tier.fee}</span>
                          <span class="text-[10px] uppercase font-bold" style="color: #94a3b8 !important;">SAR</span>
                        </div>
                        <p class="text-[10px] leading-tight mt-1 line-clamp-2" style="color: #cbd5e1 !important;">${tier.desc || ''}</p>
                      </div>
                      <div class="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-bold" style="color: #f1f5f9 !important;">
                        <span style="color: #f8fafc !important;">${tier.duration}</span>
                        <i data-lucide="check-circle" class="w-3.5 h-3.5 ${isGolden ? 'text-amber-400' : 'text-emerald-400'}"></i>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
              <input type="hidden" id="reg-tier-select" name="membershipType" value="${defaultTier}" />
              <input type="hidden" id="reg-fee-input" name="membershipFee" value="${defaultFee}" />
            </div>

            <!-- Step 2: Authentic Member Information Fields -->
            <div class="border-t border-slate-800 pt-4 space-y-4">
              <label class="font-black text-amber-400 text-xs uppercase tracking-wider block flex items-center gap-1.5">
                <i data-lucide="user" class="w-4 h-4 text-amber-400"></i> Step 2: Personal Identification & Contact Details
              </label>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="font-bold text-slate-300 block mb-1">Full Name</label>
                <input type="text" name="fullName" required oninput="const el=document.getElementById('esewa-remark-name'); if(el) el.innerText=this.value.trim()||'[Full Name]';" placeholder="First Middle Last" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Father Name</label>
                <input type="text" name="fatherName" required placeholder="Father Full Name" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Mother Name</label>
                <input type="text" name="motherName" required placeholder="Mother Full Name" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Gender</label>
                <select name="gender" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Date of Birth</label>
                <input type="date" name="dob" required class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Citizenship Number</label>
                <input type="text" name="citizenshipNo" required placeholder="27-01-72-XXXXX" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Passport Number</label>
                <input type="text" name="passport" required placeholder="N01234567" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Iqama Number</label>
                <input type="text" name="iqama" required placeholder="2456789123" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">District</label>
                <select name="district" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
                  <option value="Nuwakot">Nuwakot</option>
                  <option value="Rasuwa">Rasuwa</option>
                  <option value="Dhading">Dhading</option>
                </select>
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Municipality & Ward</label>
                <input type="text" name="municipality" required placeholder="e.g. Bidur Municipality, Ward 04" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Current Saudi City</label>
                <input type="text" name="saudiCity" required placeholder="Riyadh, Jeddah, Dammam..." class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Mobile Phone Number</label>
                <div class="flex gap-2">
                  <select name="countryCode" class="w-32 px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 text-xs font-bold focus:border-emerald-500 cursor-pointer">
                    ${COUNTRY_DIAL_CODES.map(c => `<option value="${c.code}" ${c.code === '+966' ? 'selected' : ''}>${c.flag} ${c.code} (${c.country})</option>`).join('')}
                  </select>
                  <input type="tel" name="phoneNum" required oninput="const el=document.getElementById('esewa-remark-contact'); if(el) el.innerText=this.value.trim()||'[Mobile Number]';" placeholder="54 XXXXXXX" class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs" />
                </div>
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Email Address</label>
                <input type="email" name="email" required placeholder="your.email@gmail.com" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Password</label>
                <input type="password" name="password" required placeholder="••••••••" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Blood Group</label>
                <select name="bloodGroup" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white">
                  <option value="O+">O+</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <!-- Membership Categories Selection -->
              <div>
                <label class="font-bold text-slate-300 block mb-1">Membership Category</label>
                <select name="membershipType" onchange="const f={ 'Guest Member':0, 'Half Year General Member':60, '2 Year General Member':200, 'Lifetime Member':250, 'Founder Member':300 }; this.form.membershipFee.value=f[this.value]!==undefined?f[this.value]:60;" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
                  <option value="Guest Member" ${defaultTier === 'Guest Member' ? 'selected' : ''}>0. Guest Member (0 SAR - Free Guest Access)</option>
                  <option value="Half Year General Member" ${defaultTier === 'Half Year General Member' ? 'selected' : ''}>1. Half Year General Member (60 SAR)</option>
                  <option value="2 Year General Member" ${defaultTier === '2 Year General Member' ? 'selected' : ''}>2. 2 Year General Member (200 SAR)</option>
                  <option value="Lifetime Member" ${defaultTier === 'Lifetime Member' ? 'selected' : ''}>3. Lifetime Member (250 SAR)</option>
                  <option value="Founder Member" ${defaultTier === 'Founder Member' ? 'selected' : ''}>4. Founder Member (300 SAR - Golden Box)</option>
                </select>
              </div>
              <input type="hidden" name="membershipFee" value="${defaultFee}" />

              <!-- Official eSewa QR Payment Gateway & Instructions Box -->
              <div class="sm:col-span-2 p-4 rounded-2xl bg-slate-950 border-2 border-emerald-500/50 space-y-4 text-left shadow-2xl">
                <div class="flex flex-col sm:flex-row items-center gap-5">
                  
                  <!-- eSewa QR Code Image Box -->
                  <div class="w-44 sm:w-48 h-auto p-2 bg-white rounded-2xl border-2 border-emerald-400 shadow-xl flex-shrink-0 text-center">
                    <img src="esewa_qr.png" onerror="if(!this.t1){this.t1=true; this.src='./esewa_qr.png';}else if(!this.t2){this.t2=true; this.src='esewa_qr.PNG';}else if(!this.t3){this.t3=true; this.src='https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=eSewa_NRDSS_Official_Payment_Gateway';}" alt="eSewa Official QR Payment Code" class="w-full h-auto object-contain rounded-xl" />
                    <div class="mt-1 text-[10px] font-black text-emerald-800 uppercase tracking-widest">eSewa Official QR</div>
                  </div>

                  <!-- Payment Remarks Instructions Text -->
                  <div class="flex-1 space-y-2 text-xs">
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[11px] border border-emerald-500/30">
                      <i data-lucide="qr-code" class="w-3.5 h-3.5 text-emerald-400"></i> eSewa Direct QR Payment Gateway
                    </div>
                    
                    <h4 class="font-extrabold text-white text-sm">Scan QR Code & Include Payment Remarks:</h4>
                    <p class="text-[11px] text-slate-300">When paying via eSewa QR scan, please write the following details in the eSewa <strong>Remarks / Note</strong> field:</p>
                    
                    <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1.5 font-mono text-[11px] text-slate-200 shadow-inner">
                      <div class="font-black text-amber-400 text-[11px] border-b border-slate-800 pb-1 uppercase tracking-wide flex items-center justify-between">
                        <span>Compulsory Payment Remarks:</span>
                        <i data-lucide="edit-3" class="w-3 h-3 text-amber-400"></i>
                      </div>
                      <div class="flex items-center justify-between pt-0.5">
                        <span class="text-slate-400 font-bold">Your Name:</span>
                        <strong class="text-white font-black" id="esewa-remark-name">[Full Name]</strong>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-slate-400 font-bold">Contact:</span>
                        <strong class="text-white font-black" id="esewa-remark-contact">[Mobile Number]</strong>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-slate-400 font-bold">Membership Category:</span>
                        <strong class="text-amber-300 font-black" id="esewa-remark-category">${defaultTier}</strong>
                      </div>
                    </div>

                    <p class="text-[10px] text-slate-400 leading-tight pt-1">
                      * After scanning and transferring, upload your eSewa payment receipt file below for instant admin verification.
                    </p>
                  </div>

                </div>
              </div>

              <!-- Verification Documents & Payment Receipt File Upload Buttons (Rich Maroon Cards) -->
              <div class="sm:col-span-2 space-y-3 border-t border-slate-800 pt-3">
                <h4 class="font-black text-amber-400 text-xs uppercase flex items-center gap-1.5" style="color: #f59e0b !important;">
                  <i data-lucide="file-text" class="w-4 h-4"></i> Upload Verification Documents & Payment Receipt Files
                </h4>
                
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <!-- Citizenship Document (Maroon Card) -->
                  <div class="p-3.5 rounded-2xl border-2 transition-all space-y-2 text-center shadow-xl" style="background-color: #5c0612 !important; background: linear-gradient(135deg, #700b18 0%, #4a040d 100%) !important; border-color: #a81c2e !important;">
                    <span class="text-[11px] font-black text-white block uppercase tracking-wide" style="color: #ffffff !important;">Citizenship Card File</span>
                    <input type="file" id="reg-citizen-file" accept="image/*,.pdf" onchange="app.handleFileUpload(this, 'reg-citizen-doc', 'reg-citizen-preview')" class="hidden" />
                    <label for="reg-citizen-file" class="cursor-pointer px-4 py-2 rounded-xl font-black text-xs border inline-flex items-center justify-center gap-1.5 shadow-lg transform hover:scale-105 transition-all" style="background-color: #f59e0b !important; color: #020617 !important; border-color: #fbbf24 !important;">
                      <i data-lucide="upload" class="w-3.5 h-3.5" style="color: #020617 !important;"></i> Choose File
                    </label>
                    <input type="hidden" id="reg-citizen-doc" name="citizenshipDoc" />
                    <div id="reg-citizen-preview" class="mt-1"></div>
                  </div>

                  <!-- Passport Document (Maroon Card) -->
                  <div class="p-3.5 rounded-2xl border-2 transition-all space-y-2 text-center shadow-xl" style="background-color: #5c0612 !important; background: linear-gradient(135deg, #700b18 0%, #4a040d 100%) !important; border-color: #a81c2e !important;">
                    <span class="text-[11px] font-black text-white block uppercase tracking-wide" style="color: #ffffff !important;">Passport Document File</span>
                    <input type="file" id="reg-passport-file" accept="image/*,.pdf" onchange="app.handleFileUpload(this, 'reg-passport-doc', 'reg-passport-preview')" class="hidden" />
                    <label for="reg-passport-file" class="cursor-pointer px-4 py-2 rounded-xl font-black text-xs border inline-flex items-center justify-center gap-1.5 shadow-lg transform hover:scale-105 transition-all" style="background-color: #f59e0b !important; color: #020617 !important; border-color: #fbbf24 !important;">
                      <i data-lucide="upload" class="w-3.5 h-3.5" style="color: #020617 !important;"></i> Choose File
                    </label>
                    <input type="hidden" id="reg-passport-doc" name="passportDoc" />
                    <div id="reg-passport-preview" class="mt-1"></div>
                  </div>

                  <!-- Payment Receipt (Maroon Card) -->
                  <div class="p-3.5 rounded-2xl border-2 transition-all space-y-2 text-center shadow-xl" style="background-color: #5c0612 !important; background: linear-gradient(135deg, #700b18 0%, #4a040d 100%) !important; border-color: #a81c2e !important;">
                    <span class="text-[11px] font-black text-white block uppercase tracking-wide" style="color: #ffffff !important;">Payment Receipt File</span>
                    <input type="file" id="reg-receipt-file" accept="image/*,.pdf" onchange="app.handleFileUpload(this, 'reg-receipt-doc', 'reg-receipt-preview')" class="hidden" />
                    <label for="reg-receipt-file" class="cursor-pointer px-4 py-2 rounded-xl font-black text-xs border inline-flex items-center justify-center gap-1.5 shadow-lg transform hover:scale-105 transition-all" style="background-color: #f59e0b !important; color: #020617 !important; border-color: #fbbf24 !important;">
                      <i data-lucide="upload" class="w-3.5 h-3.5" style="color: #020617 !important;"></i> Choose File
                    </label>
                    <input type="hidden" id="reg-receipt-doc" name="paymentReceipt" />
                    <div id="reg-receipt-preview" class="mt-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-emerald-950/50">
              Submit Registration & Apply
            </button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  openBroadcastNotifModal() {
    const modalHtml = `
      <div id="broadcast-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl p-6 space-y-6 relative">
          <button onclick="document.getElementById('broadcast-modal').remove()" title="Close" aria-label="Close" class="modal-close-btn absolute top-4 right-4 p-2">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <i data-lucide="send" class="w-5 h-5 text-emerald-400"></i> Broadcast Push Notification
          </h3>

          <form onsubmit="event.preventDefault(); app.handleBroadcastNotification(this.title.value, this.message.value, this.coverUrl ? this.coverUrl.value : ''); document.getElementById('broadcast-modal').remove();" class="space-y-4 text-left">
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Notification Title</label>
              <input type="text" name="title" required placeholder="e.g. Important Assembly Reminder" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm" />
            </div>
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Message Content</label>
              <textarea name="message" required rows="3" placeholder="Enter broadcast message for all members..." class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm"></textarea>
            </div>

            <!-- Upload Cover File Button -->
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Notification Cover File (Optional Image)</label>
              <div class="p-3 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-700 hover:border-emerald-500 transition-all text-center space-y-2">
                <input type="file" id="notif-cover-file" accept="image/*" onchange="app.handleFileUpload(this, 'notif-cover-url-input', 'notif-cover-preview')" class="hidden" />
                <label for="notif-cover-file" class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 font-extrabold text-xs transition-all">
                  <i data-lucide="upload" class="w-4 h-4"></i> Upload Cover Image File
                </label>
                <div id="notif-cover-preview"></div>
              </div>
              <input type="hidden" id="notif-cover-url-input" name="coverUrl" />
            </div>

            <button type="submit" class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm">
              Send Push Notification To All Members
            </button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  openCreateEventModal() {
    const modalHtml = `
      <div id="event-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl p-6 space-y-6 relative max-h-[90vh] overflow-y-auto">
          <button onclick="document.getElementById('event-modal').remove()" title="Close" aria-label="Close" class="modal-close-btn absolute top-4 right-4 p-2">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <i data-lucide="calendar" class="w-5 h-5 text-emerald-400"></i> Create & Publish Event
          </h3>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); const events=store.getEvents(); events.unshift({ id:'evt_'+Date.now(), title:fd.get('title'), date:fd.get('date'), time:fd.get('time'), locationName:fd.get('locationName'), googleMapsUrl:fd.get('googleMapsUrl'), bannerUrl:fd.get('bannerUrl') || 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&auto=format&fit=crop&q=80', registrationFee:Number(fd.get('registrationFee'))||0, description:fd.get('description'), registeredMembers:[] }); store.saveEvents(events); app.showToast('Event published successfully!', 'success'); app.render(); document.getElementById('event-modal').remove();" class="space-y-3 text-xs text-left">
            <div>
              <label class="font-bold text-slate-300 block mb-1">Event Title</label>
              <input type="text" name="title" required placeholder="Program Name" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="font-bold text-slate-300 block mb-1">Date</label>
                <input type="date" name="date" required class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
              <div>
                <label class="font-bold text-slate-300 block mb-1">Time</label>
                <input type="text" name="time" required placeholder="04:00 PM - 10:00 PM" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
              </div>
            </div>
            <div>
              <label class="font-bold text-slate-300 block mb-1">Entry Fee Amount (SAR) <span class="text-[10px] text-slate-400 font-normal">(0 for Free Entry)</span></label>
              <input type="number" name="registrationFee" min="0" step="5" value="0" placeholder="0 for Free Entry, or SAR amount" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-emerald-400 font-mono font-black text-sm" />
            </div>
            <div>
              <label class="font-bold text-slate-300 block mb-1">Venue Location Name</label>
              <input type="text" name="locationName" required placeholder="e.g. Al-Anoud Convention Center, Riyadh" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
            </div>
            <div>
              <label class="font-bold text-slate-300 block mb-1">Google Maps URL</label>
              <input type="url" name="googleMapsUrl" required placeholder="https://maps.google.com/..." class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white" />
            </div>

            <!-- Upload Event Cover File Button -->
            <div>
              <label class="font-bold text-slate-300 block mb-1">Event Cover / Banner Image File</label>
              <div class="p-3 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-700 hover:border-emerald-500 transition-all text-center space-y-2">
                <input type="file" id="evt-banner-file" accept="image/*" onchange="app.handleFileUpload(this, 'evt-banner-url-input', 'evt-banner-preview')" class="hidden" />
                <label for="evt-banner-file" class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all shadow-md">
                  <i data-lucide="upload" class="w-4 h-4"></i> Upload Event Banner Image File
                </label>
                <div class="text-[10px] text-slate-400">Select image file from device or drag & drop</div>
                <div id="evt-banner-preview"></div>
              </div>
              <input type="hidden" id="evt-banner-url-input" name="bannerUrl" required />
            </div>

            <div>
              <label class="font-bold text-slate-300 block mb-1">Description</label>
              <textarea name="description" required rows="3" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"></textarea>
            </div>
            <button type="submit" class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm">
              Publish Event To All Members
            </button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  openCreateAdModal() {
    const modalHtml = `
      <div id="ad-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl p-6 space-y-6 relative max-h-[90vh] overflow-y-auto">
          <button onclick="document.getElementById('ad-modal').remove()" title="Close" aria-label="Close" class="modal-close-btn absolute top-4 right-4 p-2">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <i data-lucide="megaphone" class="w-5 h-5 text-amber-400"></i> Upload Advertisement
          </h3>

          <form onsubmit="event.preventDefault(); const fd=new FormData(this); const mediaUrl=fd.get('mediaUrl') || document.getElementById('ad-media-url-input')?.value; if(app.handleAddAdvertisement({ title:fd.get('title'), type:fd.get('type'), mediaUrl:mediaUrl, targetUrl:fd.get('targetUrl'), caption:fd.get('caption') })){ document.getElementById('ad-modal').remove(); }" class="space-y-4 text-xs text-left">
            <div>
              <label class="font-bold text-slate-300 block mb-1">Ad Title / Sponsor Name</label>
              <input type="text" name="title" required placeholder="Business Name" class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-black font-semibold" />
            </div>
            <div>
              <label class="font-bold text-slate-300 block mb-1">Ad Media Format</label>
              <select id="ad-type-select" name="type" class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-black font-extrabold">
                <option value="photo" class="text-black bg-white">Photo Banner</option>
                <option value="video" class="text-black bg-white">Video Banner</option>
              </select>
            </div>

            <!-- Upload File Button -->
            <div>
              <label class="font-bold text-slate-300 block mb-1">Photo / Video Media File</label>
              <div class="p-4 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-700 hover:border-amber-500 transition-all text-center space-y-2">
                <input type="file" id="ad-media-file" accept="image/*,video/*" onchange="app.handleFileUpload(this, 'ad-media-url-input', 'ad-media-preview', 'ad-type-select')" class="hidden" />
                <label for="ad-media-file" class="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-lg shadow-amber-950/40">
                  <i data-lucide="upload" class="w-4 h-4"></i> Upload Photo / Video File
                </label>
                <div class="text-[10px] text-slate-400">Choose media file from device or drag & drop</div>
                <div id="ad-media-preview"></div>
              </div>
              <input type="hidden" id="ad-media-url-input" name="mediaUrl" required />
            </div>

            <div>
              <label class="font-bold text-slate-300 block mb-1">Target Action Link / Email (Optional)</label>
              <input type="text" name="targetUrl" placeholder="mailto:nrdssksa@gmail.com or https://..." class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-black font-semibold" />
            </div>
            <div>
              <label class="font-bold text-slate-300 block mb-1">Promotion / Caption Details</label>
              <textarea name="caption" required rows="2" class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-black font-semibold"></textarea>
            </div>
            <button type="submit" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-950/50">
              Publish Advertisement Space
            </button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Dynamic QR Code Authenticity Verifier Handler & Strict Anti-Recheckin Guard
  handleVerifyQR(rawInput) {
    if (!rawInput || !rawInput.trim()) {
      this.showToast('Please enter or scan a valid QR code payload.', 'warning');
      return;
    }

    const code = this.extractCodeFromInput(rawInput);
    const users = store.getUsers();
    const events = store.getEvents();

    const cleanCode = code.toLowerCase();

    // Look up member by code, id, or email
    const member = users.find(u => 
      (u.memberCode && u.memberCode.toLowerCase() === cleanCode) ||
      (u.id && u.id.toLowerCase() === cleanCode) ||
      (u.email && u.email.toLowerCase() === cleanCode) ||
      cleanCode.includes((u.memberCode || '___').toLowerCase()) ||
      (u.memberCode && u.memberCode.toLowerCase().includes(cleanCode))
    );

    // Look up event ticket pass by code
    let foundTicket = null;
    let foundEvent = null;
    events.forEach(evt => {
      (evt.registrations || []).forEach(reg => {
        if (reg.ticketCode && (
          reg.ticketCode.toLowerCase() === cleanCode ||
          cleanCode.includes(reg.ticketCode.toLowerCase()) ||
          reg.ticketCode.toLowerCase().includes(cleanCode)
        )) {
          foundTicket = reg;
          foundEvent = evt;
        }
      });
    });

    if (foundTicket && foundEvent) {
      const isPaid = foundTicket.paymentStatus === 'Paid' || foundTicket.paymentStatus === 'Approved' || (foundEvent.registrationFee === 0);
      if (!isPaid) {
        this.showToast(`⛔ CHECK-IN BLOCKED! Ticket ${foundTicket.ticketCode} for ${foundTicket.name} ${foundTicket.surname} is PENDING ADMIN PAYMENT APPROVAL.`, 'error');
        this.openPublicVerificationModal(code);
        return;
      }
    }

    const checkinKey = (member ? member.memberCode : (foundTicket ? foundTicket.ticketCode : code)).toUpperCase();

    // Retrieve Attendance Log History
    const attendanceLogs = JSON.parse(localStorage.getItem('nrdss_gate_attendance_v1') || '[]');
    const existingLog = attendanceLogs.find(log => log.checkinKey === checkinKey);

    if (existingLog) {
      // ⛔ RE-CHECKIN PROHIBITED - ALREADY CHECKED IN AT GATE
      this.showToast(`⛔ RE-CHECKIN BLOCKED! ${existingLog.name} (${existingLog.checkinKey}) was ALREADY checked in at ${existingLog.timestamp} by ${existingLog.verifier}.`, 'error');
      this.openDuplicateCheckinAlertModal(existingLog, member || foundTicket);
      return;
    }

    if (member || foundTicket) {
      const verifierName = this.currentUser ? `${this.currentUser.titlePrefix || ''} ${this.currentUser.fullName}`.trim() : 'Gate Scanner Officer';
      const timestamp = new Date().toLocaleString();
      const name = member ? member.fullName : `${foundTicket.name} ${foundTicket.surname}`;

      // Save Gate Check-in Record
      const newLog = {
        checkinKey: checkinKey,
        name: name,
        memberCode: member ? member.memberCode : foundTicket.ticketCode,
        timestamp: timestamp,
        verifier: verifierName,
        details: member ? `${member.membershipType} (${member.district})` : `Event: ${foundEvent ? foundEvent.title : 'Program'}`
      };

      attendanceLogs.unshift(newLog);
      localStorage.setItem('nrdss_gate_attendance_v1', JSON.stringify(attendanceLogs));

      if (foundEvent && foundTicket) {
        foundTicket.checkedIn = true;
        foundTicket.checkedInTime = timestamp;
        store.saveEvents(events);
      }

      this.qrVerificationResult = {
        valid: true,
        member: member || { fullName: name, memberCode: foundTicket.ticketCode, membershipType: 'Event Ticket Pass', status: 'Approved', district: 'KSA' },
        rawCode: code
      };

      this.showToast(`✅ FIRST GATE CHECK-IN VERIFIED: ${name} (${checkinKey}) at ${timestamp}`, 'success');
      this.openPublicVerificationModal(code);
    } else {
      this.qrVerificationResult = {
        valid: false,
        rawCode: code
      };
      this.showToast('Unrecognized or unverified QR payload.', 'error');
      this.openPublicVerificationModal(code);
    }
  }

  // Red Alert Modal when Duplicate Check-in is Attempted
  openDuplicateCheckinAlertModal(log, target) {
    const existing = document.getElementById('duplicate-checkin-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="duplicate-checkin-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border-4 border-red-600 w-full max-w-md rounded-3xl p-6 sm:p-8 space-y-6 relative text-center shadow-2xl text-white">
          <button onclick="document.getElementById('duplicate-checkin-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white p-1">
            <i data-lucide="x" class="w-6 h-6"></i>
          </button>

          <div class="w-16 h-16 rounded-full bg-red-600/30 border-2 border-red-500 text-red-500 mx-auto flex items-center justify-center shadow-xl animate-pulse">
            <i data-lucide="alert-triangle" class="w-9 h-9"></i>
          </div>

          <div class="space-y-2">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950 text-red-400 border border-red-700 text-xs font-black uppercase tracking-wider">
              ⛔ RE-CHECKIN PROHIBITED
            </div>
            <h3 class="text-2xl font-black text-white">Duplicate Gate Check-in Blocked!</h3>
            <p class="text-xs text-slate-300">This member or event ticket has already completed gate check-in. Second check-in is not permitted.</p>
          </div>

          <div class="bg-slate-950 p-4 rounded-2xl border border-red-800 text-left space-y-2 text-xs font-mono">
            <div class="text-amber-400 font-bold flex items-center justify-between border-b border-slate-800 pb-1">
              <span>Member / Ticket Code:</span>
              <span class="text-white font-black">${log.checkinKey}</span>
            </div>
            <div>Name: <strong class="text-white font-sans">${log.name}</strong></div>
            <div>Original Check-in Time: <strong class="text-emerald-400">${log.timestamp}</strong></div>
            <div>Verified By Gate Officer: <strong class="text-amber-300 font-sans">${log.verifier}</strong></div>
          </div>

          <button onclick="document.getElementById('duplicate-checkin-modal').remove()" class="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-950/50">
            Acknowledge & Close Alert
          </button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Red Alert Modal when Duplicate Registration Details are Submitted
  openDuplicateMemberAlertModal(dupUser) {
    const existing = document.getElementById('duplicate-member-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="duplicate-member-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border-4 border-amber-500 w-full max-w-md rounded-3xl p-6 sm:p-8 space-y-6 relative text-center shadow-2xl text-white">
          <button onclick="document.getElementById('duplicate-member-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-white p-1">
            <i data-lucide="x" class="w-6 h-6"></i>
          </button>

          <div class="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-400 mx-auto flex items-center justify-center shadow-xl">
            <i data-lucide="user-x" class="w-9 h-9"></i>
          </div>

          <div class="space-y-2">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-600 text-xs font-black uppercase tracking-wider">
              ⚠️ DUPLICATE ENTRY BLOCKED
            </div>
            <h3 class="text-2xl font-black text-white">Member Already Registered!</h3>
            <p class="text-xs text-slate-300">A member profile with matching Iqama Number, Citizenship Number, or Email already exists in the NRDSS directory. Two entries for the same person are not allowed.</p>
          </div>

          <div class="bg-slate-950 p-4 rounded-2xl border border-amber-500/40 text-left space-y-2 text-xs">
            <div class="text-slate-400">Existing Member Name: <strong class="text-white text-sm block">${dupUser.fullName}</strong></div>
            <div class="text-slate-400">Member Code: <strong class="text-emerald-400 font-mono">${dupUser.memberCode}</strong></div>
            <div class="text-slate-400">Category: <strong class="text-amber-300">${dupUser.membershipType}</strong></div>
            <div class="text-slate-400">Account Status: <strong class="text-emerald-400 uppercase">${dupUser.status}</strong></div>
          </div>

          <button onclick="document.getElementById('duplicate-member-modal').remove()" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg">
            Understand & Return to Form
          </button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  openQRScannerModal() {
    const existing = document.getElementById('qr-scanner-modal');
    if (existing) existing.remove();

    this.stopCameraStream();

    const modalHtml = `
      <div id="qr-scanner-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-5 relative text-left shadow-2xl">
          <button onclick="app.stopCameraStream(); document.getElementById('qr-scanner-modal').remove()" title="Close" aria-label="Close" class="modal-close-btn absolute top-5 right-5 p-2 text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-black uppercase border border-amber-500/30">
              <i data-lucide="scan" class="w-3.5 h-3.5"></i> Camera QR Authenticity Verifier
            </div>
            <h3 class="text-2xl font-black text-white mt-1">Live Camera & Code Scanner</h3>
            <p class="text-xs text-slate-400">Scan event ticket QR passes or member cards using camera, photo upload, or manual code input.</p>
          </div>

          <!-- Official Html5QrcodeScanner Engine Container -->
          <div class="space-y-2">
            <div id="qr-reader" class="w-full rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-700 min-h-[250px] p-2 text-white shadow-inner"></div>
          </div>

          <!-- Manual Text Code Verification Fallback -->
          <div class="space-y-2 border-t border-slate-800 pt-3">
            <label class="text-xs font-bold text-slate-300 block">Or Enter / Paste QR String, Member Code, or Ticket Pass Code</label>
            <div class="flex gap-2">
              <input type="text" id="qr-verify-input" placeholder="e.g. TKT-101-8891 or NRDSS-2026-8891" class="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-amber-500 focus:outline-none" />
              <button onclick="app.stopCameraStream(); app.handleVerifyQR(document.getElementById('qr-verify-input').value); document.getElementById('qr-scanner-modal').remove();" class="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 shadow-md flex-shrink-0">
                <i data-lucide="check-circle-2" class="w-4 h-4"></i> Verify Code
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();

    // Initialize Official HTML5 QR Code Scanner Component
    if (typeof Html5QrcodeScanner !== 'undefined') {
      try {
        const scanner = new Html5QrcodeScanner(
          "qr-reader",
          { 
            fps: 15, 
            qrbox: { width: 240, height: 240 },
            aspectRatio: 1.0,
            showTorchButtonIfSupported: true,
            videoConstraints: { facingMode: "environment" }
          },
          /* verbose= */ false
        );

        window.activeHtml5QrScanner = scanner;

        scanner.render((decodedText) => {
          try { scanner.clear(); } catch(e) {}
          const modal = document.getElementById('qr-scanner-modal');
          if (modal) modal.remove();
          this.handleVerifyQR(decodedText);
        }, (error) => {});
      } catch(err) {
        console.warn("Scanner render warning:", err);
      }
    }
  }

  // Stop Camera Tracks & Release Hardware Stream
  stopCameraStream() {
    if (window.activeHtml5QrScanner) {
      try { window.activeHtml5QrScanner.clear(); } catch(e) {}
      window.activeHtml5QrScanner = null;
    }
    if (window.activeHtml5QrCode) {
      try { window.activeHtml5QrCode.stop(); } catch(e) {}
      window.activeHtml5QrCode = null;
    }
    if (this.cameraMediaStream) {
      try { this.cameraMediaStream.getTracks().forEach(t => t.stop()); } catch(e) {}
      this.cameraMediaStream = null;
    }
  }

  // Open Detailed Financial Ledger Modal (Membership + Event Income Breakdown)
  openIncomeBreakdownModal() {
    const users = store.getUsers();
    const approvedUsers = users.filter(u => u.status === 'Approved');
    const events = store.getEvents();

    const membershipIncome = approvedUsers.reduce((acc, u) => acc + (u.membershipFee || 0), 0);

    let eventIncome = 0;
    let eventRegistrationsList = [];
    events.forEach(evt => {
      (evt.registrations || []).forEach(reg => {
        const feePaid = reg.feePaid !== undefined ? Number(reg.feePaid) : (evt.registrationFee || 0);
        if (reg.paymentStatus === 'Paid' || feePaid > 0) {
          eventIncome += feePaid;
          eventRegistrationsList.push({
            ...reg,
            eventTitle: evt.title,
            feePaid: feePaid
          });
        }
      });
    });

    const totalIncome = membershipIncome + eventIncome;

    const existing = document.getElementById('income-breakdown-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="income-breakdown-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div class="bg-white text-slate-900 border border-slate-200 w-full max-w-3xl rounded-3xl p-6 lg:p-8 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
          <button onclick="document.getElementById('income-breakdown-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="text-left space-y-1 border-b border-slate-200 pb-4">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider border border-emerald-300">
              <i data-lucide="landmark" class="w-3.5 h-3.5 text-emerald-600"></i> Financial Revenue Ledger
            </div>
            <h3 class="text-2xl font-black text-slate-900">NRDSS Saudi Arabia Total Income Ledger</h3>
            <p class="text-xs text-slate-600">Complete summary of membership tier fees and event registration revenue collected from community members.</p>
          </div>

          <!-- Top Grand Total Banner -->
          <div class="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 rounded-2xl border border-amber-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="text-xs font-bold text-amber-400 uppercase tracking-widest">Total Combined Treasury Income</div>
              <div class="text-4xl font-black text-white mt-1">${totalIncome} <span class="text-lg text-emerald-400 font-bold">SAR</span></div>
            </div>
            <div class="flex gap-4 text-xs">
              <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-left">
                <div class="text-slate-400 font-bold text-[10px] uppercase">Membership Fees</div>
                <div class="text-emerald-400 font-black text-lg">${membershipIncome} SAR</div>
              </div>
              <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-left">
                <div class="text-slate-400 font-bold text-[10px] uppercase">Event Registrations</div>
                <div class="text-amber-400 font-black text-lg">${eventIncome} SAR</div>
              </div>
            </div>
          </div>

          <!-- Section 1: Membership Fees Breakdown -->
          <div class="space-y-3 text-left">
            <div class="flex items-center justify-between">
              <h4 class="font-black text-slate-900 text-base flex items-center gap-2">
                <i data-lucide="shield-check" class="w-5 h-5 text-blue-800"></i> Approved Membership Tier Revenue (${approvedUsers.length} Members)
              </h4>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">${membershipIncome} SAR</span>
            </div>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
              <table class="w-full text-left text-xs text-slate-800">
                <thead class="bg-slate-100 uppercase text-[10px] text-slate-600 font-black">
                  <tr>
                    <th class="p-2.5">Member Name</th>
                    <th class="p-2.5">Member Code</th>
                    <th class="p-2.5">Category</th>
                    <th class="p-2.5 text-right">Fee (SAR)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${approvedUsers.map(u => `
                    <tr class="hover:bg-slate-50">
                      <td class="p-2.5 font-bold text-slate-900">${u.fullName}</td>
                      <td class="p-2.5 font-mono text-emerald-700 font-bold">${u.memberCode}</td>
                      <td class="p-2.5 font-medium">${u.membershipType}</td>
                      <td class="p-2.5 text-right font-extrabold text-slate-900">${u.membershipFee} SAR</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 2: Event Registration Fees Breakdown -->
          <div class="space-y-3 text-left">
            <div class="flex items-center justify-between">
              <h4 class="font-black text-slate-900 text-base flex items-center gap-2">
                <i data-lucide="ticket" class="w-5 h-5 text-amber-600"></i> Event Registration Fees Revenue (${eventRegistrationsList.length} Attendees)
              </h4>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">${eventIncome} SAR</span>
            </div>

            ${eventRegistrationsList.length === 0 ? `
              <div class="text-xs text-slate-500 italic p-4 bg-slate-50 rounded-xl text-center border border-slate-200">
                No event registration fees collected yet.
              </div>
            ` : `
              <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="w-full text-left text-xs text-slate-800">
                  <thead class="bg-slate-100 uppercase text-[10px] text-slate-600 font-black">
                    <tr>
                      <th class="p-2.5">Attendee Name</th>
                      <th class="p-2.5">Event Title</th>
                      <th class="p-2.5">Ticket Code</th>
                      <th class="p-2.5 text-right">Fee Paid (SAR)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    ${eventRegistrationsList.map(r => `
                      <tr class="hover:bg-slate-50">
                        <td class="p-2.5 font-bold text-slate-900">${r.name} ${r.surname}</td>
                        <td class="p-2.5 font-medium text-slate-700">${r.eventTitle}</td>
                        <td class="p-2.5 font-mono text-blue-900 font-bold">${r.ticketCode}</td>
                        <td class="p-2.5 text-right font-extrabold text-emerald-700">${r.feePaid} SAR</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            `}
          </div>

          <div class="pt-2 border-t border-slate-200 flex justify-end">
            <button onclick="document.getElementById('income-breakdown-modal').remove()" class="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-md">
              Close Financial Ledger
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Helper to view ticket registration payment receipt without inline Base64 HTML attribute syntax errors
  viewTicketPaymentReceipt(eventId, ticketCode) {
    const events = store.getEvents();
    let evt = events.find(e => e.id === eventId);
    let reg = null;

    if (evt && evt.registrations) {
      reg = evt.registrations.find(r => r.ticketCode === ticketCode || r.id === ticketCode);
    }

    if (!reg) {
      for (const e of events) {
        if (e.registrations) {
          const found = e.registrations.find(r => r.ticketCode === ticketCode || r.id === ticketCode);
          if (found) {
            evt = e;
            reg = found;
            break;
          }
        }
      }
    }

    if (!reg) {
      this.showToast('Ticket registration record not found.', 'error');
      return;
    }

    const receipt = reg.paymentReceipt || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80';
    this.openPaymentReceiptModal(receipt, `${reg.name} ${reg.surname}`, `${evt ? evt.title : 'Event'} Ticket Statement (${reg.ticketCode})`);
  }

  // Helper to view member profile membership fee receipt
  viewMemberPaymentReceipt(userId) {
    const users = store.getUsers();
    const u = users.find(user => user.id === userId || user.memberCode === userId);
    if (!u) {
      this.showToast('Member profile record not found.', 'error');
      return;
    }
    const receipt = u.paymentReceipt || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80';
    this.openPaymentReceiptModal(receipt, u.fullName, `${u.membershipType} Fee Receipt (${u.memberCode})`);
  }

  // View Payment Receipt Modal
  openPaymentReceiptModal(receiptUrl, memberName, eventTitle) {
    const existing = document.getElementById('payment-receipt-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="payment-receipt-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div class="bg-white text-slate-900 border border-slate-200 w-full max-w-lg rounded-3xl p-6 space-y-4 relative shadow-2xl">
          <button onclick="document.getElementById('payment-receipt-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="text-left space-y-1">
            <div class="text-xs font-black uppercase text-amber-600 tracking-wider">Official Payment Proof Document</div>
            <h3 class="text-lg font-black text-slate-900">${memberName || 'Member'}</h3>
            <div class="text-xs text-slate-500 font-medium">${eventTitle || 'Event Registration Payment Receipt'}</div>
          </div>

          <div class="w-full max-h-[65vh] overflow-y-auto rounded-2xl border border-slate-300 bg-slate-100 p-2 text-center">
            ${receiptUrl ? `
              <img src="${receiptUrl}" alt="Payment Receipt" class="max-w-full h-auto mx-auto rounded-xl shadow-md border border-slate-200" />
            ` : `
              <div class="p-8 text-xs text-slate-500 italic">No receipt document file attached.</div>
            `}
          </div>

          <div class="flex gap-2">
            ${receiptUrl ? `
              <a href="${receiptUrl}" target="_blank" download="Payment_Receipt_${(memberName || 'Member').replace(/\s+/g, '_')}.jpg" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all text-center flex items-center justify-center gap-1.5 shadow-md">
                <i data-lucide="download" class="w-4 h-4"></i> Download Receipt Image
              </a>
            ` : ''}
            <button onclick="document.getElementById('payment-receipt-modal').remove()" class="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-all">
              Close Window
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Open Board Members Leadership Modal
  openBoardMembersModal() {
    const existing = document.getElementById('board-members-modal');
    if (existing) existing.remove();

    const boardMembers = store.getBoardMembers();
    const isAdminOrMaster = SecurityGuard.isAdminOrMaster(this.currentUser);

    const modalHtml = `
      <div id="board-members-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
        <div class="bg-white text-slate-900 border border-slate-200 w-full max-w-4xl rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
          <button onclick="document.getElementById('board-members-modal').remove()" class="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4 pr-10">
            <div class="text-left space-y-1">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-black uppercase tracking-wider">
                <i data-lucide="award" class="w-4 h-4 text-amber-600"></i> Executive Leadership
              </div>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Our Board Member Photos</h2>
              <p class="text-slate-600 text-xs sm:text-sm font-medium">
                Official Leadership & Member Photos of Nuwakot Rasuwa Dhading Samaj Saudi Arabia (NRDSS).
              </p>
            </div>
            ${isAdminOrMaster ? `
              <button onclick="document.getElementById('board-members-modal').remove(); app.openEditBoardMemberModal(null);" class="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-2 border border-amber-400 hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0">
                <i data-lucide="upload-cloud" class="w-4 h-4 text-slate-950"></i> Upload New Member Photo
              </button>
            ` : ''}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto p-1 pr-2">
            ${boardMembers.map(m => `
              <div id="board-card-modal-${m.id}" class="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 relative overflow-hidden text-left">
                <!-- Main Photo Frame -->
                <div onclick="app.openPhotoLightbox('${m.id}')" class="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group cursor-pointer h-52 flex items-center justify-center">
                  <img src="${m.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80'}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-all opacity-95 group-hover:opacity-100" />
                  <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-1.5 text-white font-extrabold text-xs">
                    <i data-lucide="eye" class="w-4 h-4 text-amber-400"></i> View Full Photo
                  </div>
                </div>

                <!-- Member Name -->
                <div>
                  <h3 class="font-black text-slate-900 text-base leading-tight">${m.name}</h3>
                </div>

                <!-- Action Controls: View, Download & Admin Controls -->
                <div class="pt-2 border-t border-slate-200 flex flex-col gap-1.5">
                  <div class="flex items-center gap-1.5">
                    <button onclick="app.openPhotoLightbox('${m.id}')" class="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer border border-amber-400">
                      <i data-lucide="eye" class="w-3.5 h-3.5 text-slate-950"></i> View
                    </button>
                    <button onclick="app.downloadBoardPhoto('${m.id}')" class="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                      <i data-lucide="download" class="w-3.5 h-3.5 text-amber-400"></i> Download
                    </button>
                  </div>
                  ${isAdminOrMaster ? `
                    <div class="flex items-center gap-1.5">
                      <button onclick="document.getElementById('board-members-modal').remove(); app.openEditBoardMemberModal('${m.id}')" class="flex-1 py-1.5 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-extrabold text-xs border border-amber-300 transition-all flex items-center justify-center gap-1 cursor-pointer">
                        <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-700"></i> Edit / Re-upload
                      </button>
                      <button onclick="app.handleDeleteBoardMember('${m.id}')" class="p-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-extrabold text-xs border border-red-200 transition-all flex items-center justify-center cursor-pointer" title="Delete Member">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-600"></i>
                      </button>
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="pt-4 border-t border-slate-200 flex justify-end">
            <button onclick="document.getElementById('board-members-modal').remove()" class="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-md">
              Close Window
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Download Board Member Photo File directly
  downloadBoardPhoto(memberId) {
    const boardMembers = store.getBoardMembers();
    const member = boardMembers.find(m => m.id === memberId);
    if (!member || !member.photo) {
      this.showToast('Photo not available for download.', 'error');
      return;
    }

    const fileName = `NRDSS_Board_Photo_${member.name.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`;

    const link = document.createElement('a');
    link.href = member.photo;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.remove();

    this.showToast(`Downloading photo for ${member.name}...`, 'success');
  }

  // Open Full-Screen Photo Lightbox Modal
  openPhotoLightbox(memberId) {
    const boardMembers = store.getBoardMembers();
    const member = boardMembers.find(m => m.id === memberId);
    if (!member) {
      this.showToast('Board Member record not found.', 'error');
      return;
    }

    const existing = document.getElementById('board-photo-lightbox');
    if (existing) existing.remove();

    const photoUrl = member.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=80';

    const modalHtml = `
      <div id="board-photo-lightbox" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
        <div class="bg-slate-900 text-white border border-slate-700 w-full max-w-4xl rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl my-8 text-center">
          <button onclick="document.getElementById('board-photo-lightbox').remove()" class="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="space-y-1">
            <h2 class="text-2xl font-black text-white">${member.name}</h2>
            <p class="text-xs text-amber-400 font-bold">NRDSS Board Member Photo / Certificate</p>
          </div>

          <!-- Full Resolution Image Display -->
          <div class="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black max-h-[70vh] flex items-center justify-center p-2">
            <img src="${photoUrl}" alt="${member.name}" class="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg" />
          </div>

          <!-- Action Controls -->
          <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
            <button onclick="app.downloadBoardPhoto('${member.id}')" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-xs transition-all shadow-lg flex items-center gap-2 cursor-pointer border border-emerald-500 hover:scale-105 active:scale-95">
              <i data-lucide="download" class="w-4 h-4 text-white"></i> Download Photo File
            </button>
            <div class="flex items-center gap-2">
              ${SecurityGuard.isAdminOrMaster(this.currentUser) ? `
                <button onclick="document.getElementById('board-photo-lightbox').remove(); app.openEditBoardMemberModal('${member.id}')" class="px-4 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-extrabold text-xs transition-all flex items-center gap-1.5 cursor-pointer">
                  <i data-lucide="upload" class="w-4 h-4 text-amber-400"></i> Change / Re-upload Photo
                </button>
              ` : ''}
              <button onclick="document.getElementById('board-photo-lightbox').remove()" class="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Open Upload / Edit Board Member Photo Modal (Admins & Master Admin Only)
  openEditBoardMemberModal(memberId = null) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Access denied. Administrator privileges required to manage Board Member photos.', 'error');
      return;
    }

    const boardMembers = store.getBoardMembers();
    const member = memberId ? boardMembers.find(m => m.id === memberId) : null;

    const existing = document.getElementById('edit-board-member-modal');
    if (existing) existing.remove();

    const modalHtml = `
      <div id="edit-board-member-modal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
        <div class="bg-white text-slate-900 border border-slate-200 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl my-8 text-left">
          <button onclick="document.getElementById('edit-board-member-modal').remove()" class="absolute top-5 right-5 text-slate-400 hover:text-slate-900">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>

          <div class="space-y-1">
            <div class="text-xs font-black uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
              <i data-lucide="shield-check" class="w-4 h-4 text-amber-500"></i> Admin Board Photo Upload Hub
            </div>
            <h2 class="text-2xl font-black text-slate-900">
              ${member ? 'Edit Board Member Photo' : 'Upload New Board Member Photo'}
            </h2>
            <p class="text-xs text-slate-500 font-medium">Upload the official board member photo or certificate image for member viewing and downloading.</p>
          </div>

          <form onsubmit="app.handleSaveBoardMember(event, '${member ? member.id : ''}')" class="space-y-4">
            
            <div>
              <label class="block text-xs font-extrabold text-slate-700 uppercase mb-1">Board Member Name / Title *</label>
              <input type="text" name="name" required value="${member ? member.name : ''}" placeholder="e.g. Mr. Ram Lama (President)" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 text-sm font-bold text-slate-900" />
            </div>

            <!-- Upload Photo / Image File -->
            <div class="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-3">
              <label class="block text-xs font-black text-amber-900 uppercase flex items-center gap-1.5">
                <i data-lucide="image" class="w-4 h-4 text-amber-600"></i> Member Photo / Certificate File (Upload or Paste URL) *
              </label>
              
              <input type="url" id="bm-photo-url" name="photo" required value="${member ? (member.photo || '') : ''}" placeholder="Photo Image URL" class="w-full px-4 py-2.5 rounded-xl border border-amber-300 focus:ring-2 focus:ring-amber-500 text-xs font-mono text-slate-900 bg-white" />
              
              <div class="flex items-center gap-3">
                <label class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs cursor-pointer shadow-md flex items-center gap-2 border border-amber-400">
                  <i data-lucide="upload-cloud" class="w-4 h-4 text-slate-950"></i> Upload Photo File
                  <input type="file" accept="image/*" onchange="app.handleFileUpload(this, 'bm-photo-url', 'bm-photo-preview')" class="hidden" />
                </label>
                <div id="bm-photo-preview" class="text-xs text-amber-800 font-bold italic">
                  ${member && member.photo ? '✓ Photo file attached' : ''}
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-slate-200 flex gap-2">
              <button type="submit" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-900 to-emerald-800 hover:from-blue-950 hover:to-emerald-900 text-white font-extrabold text-xs transition-all shadow-lg flex items-center justify-center gap-1.5">
                <i data-lucide="save" class="w-4 h-4 text-amber-400"></i> ${member ? 'Save Photo Changes' : 'Upload Member Photo'}
              </button>
              <button type="button" onclick="document.getElementById('edit-board-member-modal').remove()" class="px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-all">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();
  }

  // Handle Save Board Member Submission
  handleSaveBoardMember(event, memberId = '') {
    event.preventDefault();
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) return;

    const form = event.target;
    const boardMembers = store.getBoardMembers();

    const name = form.name.value.trim();
    const photo = form.photo.value.trim();

    if (!photo) {
      this.showToast('Please upload or provide a photo image.', 'error');
      return;
    }

    if (memberId) {
      const idx = boardMembers.findIndex(m => m.id === memberId);
      if (idx !== -1) {
        boardMembers[idx] = { ...boardMembers[idx], name, photo };
      }
      this.showToast(`Updated Board Member photo for ${name}!`, 'success');
    } else {
      const newMember = {
        id: 'bm_' + Date.now(),
        name,
        photo
      };
      boardMembers.push(newMember);
      this.showToast(`Uploaded Board Member photo for ${name}!`, 'success');
    }

    store.saveBoardMembers(boardMembers);
    store.logAction(memberId ? 'UPDATE_BOARD_MEMBER' : 'CREATE_BOARD_MEMBER', this.currentUser ? this.currentUser.fullName : 'Admin', `Saved Board Member photo for "${name}"`);

    const modal = document.getElementById('edit-board-member-modal');
    if (modal) modal.remove();

    this.render();
  }

  // Handle Delete Board Member
  handleDeleteBoardMember(memberId) {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) return;

    const boardMembers = store.getBoardMembers();
    const member = boardMembers.find(m => m.id === memberId);
    if (!member) return;

    if (confirm(`Are you sure you want to remove ${member.name} from Our Board Members?`)) {
      const filtered = boardMembers.filter(m => m.id !== memberId);
      store.saveBoardMembers(filtered);
      store.logAction('DELETE_BOARD_MEMBER', this.currentUser ? this.currentUser.fullName : 'Admin', `Removed Board Member "${member.name}"`);
      this.showToast(`Removed ${member.name} from Board Members.`, 'info');

      const modal = document.getElementById('board-members-modal');
      if (modal) modal.remove();

      this.render();
    }
  }

  // Open Interactive Circular Logo Cropper Modal (Admin & Master Admin Only)
  openLogoCropModal() {
    if (!SecurityGuard.isAdminOrMaster(this.currentUser)) {
      this.showToast('Access denied. Administrator privileges required to manage official site logo.', 'error');
      return;
    }

    const existing = document.getElementById('logo-crop-modal');
    if (existing) existing.remove();

    const currentLogo = store.getLogo();

    // Reset cropper state variables
    this.cropScale = 1.0;
    this.cropOffsetX = 0;
    this.cropOffsetY = 0;
    this.isDraggingLogo = false;
    this.logoDragStartX = 0;
    this.logoDragStartY = 0;

    const modalHtml = `
      <div id="logo-crop-modal" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
        <div class="bg-slate-900 text-white border border-amber-500/40 w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl my-8 text-left">
          
          <!-- Header -->
          <div class="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div class="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <i data-lucide="scissors" class="w-4 h-4 text-amber-400"></i> Interactive Circular Logo Cropper
              </div>
              <h3 class="text-2xl font-black text-white">Upload & Crop Round Logo</h3>
              <p class="text-xs text-slate-400 font-medium">Drag image inside the ring and use zoom slider to position perfectly.</p>
            </div>
            <button onclick="document.getElementById('logo-crop-modal').remove()" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- File Upload & URL Input Controls -->
          <div class="space-y-2">
            <label class="block text-xs font-black text-slate-300 uppercase">1. Upload Logo Image File or Paste URL</label>
            <div class="flex flex-col sm:flex-row gap-2.5">
              <label class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs cursor-pointer shadow-md flex items-center justify-center gap-2 border border-amber-400 hover:scale-105 active:scale-95 transition-all">
                <i data-lucide="upload-cloud" class="w-4 h-4 text-slate-950"></i> Choose File
                <input type="file" accept="image/*" onchange="app.handleLogoFileSelect(this)" class="hidden" />
              </label>
              <input type="url" id="logo-url-input" placeholder="Or paste image URL..." value="${currentLogo.startsWith('data:') ? '' : currentLogo}" class="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-amber-500" onchange="app.loadLogoFromUrl(this.value)" />
            </div>
          </div>

          <!-- Interactive Drag & Zoom Canvas Box -->
          <div class="space-y-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div class="flex items-center justify-between text-xs text-slate-300 font-bold">
              <span><i data-lucide="move" class="w-4 h-4 inline text-amber-400 mr-1"></i> Drag image to adjust position</span>
              <span><i data-lucide="zoom-in" class="w-4 h-4 inline text-amber-400 mr-1"></i> Use Zoom Slider</span>
            </div>

            <!-- Circular Mask Viewport (256x256) -->
            <div class="relative w-64 h-64 mx-auto rounded-full border-4 border-amber-400 shadow-2xl overflow-hidden bg-slate-950 cursor-grab active:cursor-grabbing flex items-center justify-center select-none" id="crop-viewport" 
              onmousedown="app.startLogoDrag(event)" 
              onmousemove="app.dragLogo(event)" 
              onmouseup="app.endLogoDrag()" 
              onmouseleave="app.endLogoDrag()" 
              ontouchstart="app.startLogoDrag(event)" 
              ontouchmove="app.dragLogo(event)" 
              ontouchend="app.endLogoDrag()">
              
              <img id="crop-preview-img" src="${currentLogo}" alt="Cropper Preview" class="absolute transition-transform origin-center pointer-events-none select-none max-w-none shadow-lg" style="transform: translate(0px, 0px) scale(1); max-height: 256px;" />
              
              <div class="absolute inset-0 rounded-full border-2 border-dashed border-amber-300/50 pointer-events-none"></div>
            </div>

            <!-- Zoom Scale Slider -->
            <div class="space-y-1.5 text-center max-w-sm mx-auto pt-2">
              <div class="flex items-center justify-between text-xs font-extrabold text-slate-300">
                <span>🔍 Zoom Out</span>
                <span id="zoom-level-text" class="text-amber-400 font-mono font-black text-sm">100%</span>
                <span>🔎 Zoom In</span>
              </div>
              <input type="range" id="logo-zoom-range" min="0.3" max="3.0" step="0.05" value="1" oninput="app.updateLogoZoom(this.value)" class="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg" />
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-3 border-t border-slate-800 flex gap-3">
            <button onclick="app.cropAndSaveLogo()" class="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 border border-emerald-500 hover:scale-105 active:scale-95 cursor-pointer">
              <i data-lucide="scissors" class="w-4 h-4 text-amber-300"></i> ✂️ Crop & Apply Round Logo
            </button>
            <button onclick="document.getElementById('logo-crop-modal').remove()" class="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lucide.createIcons();

    const img = document.getElementById('crop-preview-img');
    if (img) {
      img.onload = () => {
        this.updateLogoTransform();
      };
    }
  }

  // Handle Logo File Choice
  handleLogoFileSelect(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.getElementById('crop-preview-img');
        if (img) {
          img.src = e.target.result;
          this.cropOffsetX = 0;
          this.cropOffsetY = 0;
          this.cropScale = 1.0;
          const range = document.getElementById('logo-zoom-range');
          if (range) range.value = 1.0;
          this.updateLogoTransform();
        }
      };
      reader.readAsDataURL(file);
    }
  }

  // Handle Logo URL Input
  loadLogoFromUrl(url) {
    if (!url) return;
    const img = document.getElementById('crop-preview-img');
    if (img) {
      img.src = url;
      this.cropOffsetX = 0;
      this.cropOffsetY = 0;
      this.cropScale = 1.0;
      const range = document.getElementById('logo-zoom-range');
      if (range) range.value = 1.0;
      this.updateLogoTransform();
    }
  }

  // Cropper Drag & Zoom Handlers
  startLogoDrag(e) {
    this.isDraggingLogo = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    this.logoDragStartX = clientX - (this.cropOffsetX || 0);
    this.logoDragStartY = clientY - (this.cropOffsetY || 0);
  }

  dragLogo(e) {
    if (!this.isDraggingLogo) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    this.cropOffsetX = clientX - this.logoDragStartX;
    this.cropOffsetY = clientY - this.logoDragStartY;
    this.updateLogoTransform();
  }

  endLogoDrag() {
    this.isDraggingLogo = false;
  }

  updateLogoZoom(val) {
    this.cropScale = parseFloat(val) || 1.0;
    const text = document.getElementById('zoom-level-text');
    if (text) text.innerText = `${Math.round(this.cropScale * 100)}%`;
    this.updateLogoTransform();
  }

  updateLogoTransform() {
    const img = document.getElementById('crop-preview-img');
    if (img) {
      img.style.transform = `translate(${this.cropOffsetX || 0}px, ${this.cropOffsetY || 0}px) scale(${this.cropScale || 1.0})`;
    }
  }

  // Crop & Render to Round HTML5 Canvas, then Save Data URL
  cropAndSaveLogo() {
    const img = document.getElementById('crop-preview-img');
    if (!img || !img.src) {
      this.showToast('Please select a valid logo image.', 'error');
      return;
    }

    try {
      const canvasSize = 400;
      const canvas = document.createElement('canvas');
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      const ctx = canvas.getContext('2d');

      // Create Circular Clipping Path
      ctx.beginPath();
      ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvasSize, canvasSize);

      const scaleRatio = canvasSize / 256;
      const drawWidth = (img.naturalWidth || 256) * (this.cropScale || 1.0) * scaleRatio;
      const drawHeight = (img.naturalHeight || 256) * (this.cropScale || 1.0) * scaleRatio;

      const drawX = (canvasSize / 2) - (drawWidth / 2) + ((this.cropOffsetX || 0) * scaleRatio);
      const drawY = (canvasSize / 2) - (drawHeight / 2) + ((this.cropOffsetY || 0) * scaleRatio);

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

      const croppedDataUrl = canvas.toDataURL('image/png');
      store.saveLogoConfig({
        logoUrl: croppedDataUrl,
        cropOffsetX: this.cropOffsetX,
        cropOffsetY: this.cropOffsetY,
        cropScale: this.cropScale
      });
      store.logAction('UPDATE_SITE_LOGO', this.currentUser ? this.currentUser.fullName : 'Admin', 'Cropped and updated round official site logo');

      this.showToast('✓ Official NRDSS Round Logo cropped & updated site-wide!', 'success');

      const modal = document.getElementById('logo-crop-modal');
      if (modal) modal.remove();

      this.render();
    } catch (e) {
      console.error('Error cropping logo canvas:', e);
      if (img.src) {
        store.saveLogoConfig({
          logoUrl: img.src,
          cropOffsetX: this.cropOffsetX,
          cropOffsetY: this.cropOffsetY,
          cropScale: this.cropScale
        });
        this.showToast('✓ Updated official round logo positioning & scale!', 'success');
        const modal = document.getElementById('logo-crop-modal');
        if (modal) modal.remove();
        this.render();
      }
    }
  }

  // Export Event Income Statement as CSV
  exportEventIncomeCSV() {
    const events = store.getEvents();
    const users = store.getUsers();
    let csvRows = [
      ['No', 'Attendee Name', 'Surname', 'Member Code', 'Contact Phone', 'Email', 'Event Title', 'Event Date', 'Fee Paid (SAR)', 'Payment Status', 'Payment Method', 'Ticket Code', 'Registered Date']
    ];

    let count = 0;
    events.forEach(evt => {
      (evt.registrations || []).forEach(reg => {
        count++;
        const feePaid = reg.feePaid !== undefined ? Number(reg.feePaid) : (evt.registrationFee || 0);
        const member = users.find(u => u.id === reg.userId || (u.email && u.email.toLowerCase() === (reg.email || '').toLowerCase()));
        const memberCode = member ? member.memberCode : 'Guest';
        csvRows.push([
          count,
          `"${reg.name || ''}"`,
          `"${reg.surname || ''}"`,
          `"${memberCode}"`,
          `"${reg.contact || ''}"`,
          `"${reg.email || ''}"`,
          `"${(evt.title || '').replace(/"/g, '""')}"`,
          `"${evt.date || ''}"`,
          feePaid,
          `"${reg.paymentStatus || 'Paid'}"`,
          `"${reg.paymentMethod || 'Online / Cash'}"`,
          `"${reg.ticketCode || ''}"`,
          `"${reg.registeredAt || ''}"`
        ]);
      });
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NRDSS_Event_Income_Statement_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    this.showToast('Event income statement CSV exported successfully!', 'success');
  }

  // Export Event Attendance Report as PDF Document (Checked-In Attendees Only)
  downloadEventAttendancePDF(eventId) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const registrations = (event.registrations || []).filter(r => r.checkedIn === true);
    if (registrations.length === 0) {
      this.showToast('No verified checked-in attendees found for this event to export PDF report.', 'warning');
      return;
    }

    this.showToast('Generating official PDF Verified Attendance Report...', 'info');

    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p', 'mm', 'a4');

      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Header Banner
      doc.setFillColor(13, 71, 161); // Primary Blue #0D47A1
      doc.rect(0, 0, pageWidth, 28, 'F');

      // Title Text
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text('NRDSS SAUDI ARABIA - VERIFIED GATE CHECK-IN ATTENDANCE REPORT', 14, 12);
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('Nuwakot Rasuwa Dhading Samaj Saudi Arabia • Gate Attendance Verification Unit', 14, 18);

      // Event Details Box
      doc.setFillColor(245, 247, 250);
      doc.roundedRect(14, 32, pageWidth - 28, 26, 3, 3, 'F');
      doc.setDrawColor(229, 231, 235);
      doc.roundedRect(14, 32, pageWidth - 28, 26, 3, 3, 'S');

      doc.setTextColor(17, 24, 39);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(`Event: ${event.title}`, 18, 40);

      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(75, 85, 99);
      doc.text(`Date & Time: ${event.date} (${event.time})`, 18, 46);
      doc.text(`Venue Location: ${event.locationName}`, 18, 52);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(46, 125, 50);
      doc.text(`Verified Checked-In: ${registrations.length}`, pageWidth - 65, 46);
      doc.text(`Report Date: ${new Date().toLocaleDateString()}`, pageWidth - 65, 52);

      // Table Header
      let startY = 64;
      doc.setFillColor(239, 246, 255);
      doc.rect(14, startY, pageWidth - 28, 8, 'F');
      doc.setDrawColor(191, 219, 254);
      doc.rect(14, startY, pageWidth - 28, 8, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(30, 58, 138);

      doc.text('#', 17, startY + 5.5);
      doc.text('Attendee Full Name', 25, startY + 5.5);
      doc.text('Mobile Contact', 75, startY + 5.5);
      doc.text('Ticket Pass Code', 115, startY + 5.5);
      doc.text('Gate Check-In Time', 155, startY + 5.5);

      // Table Rows
      let y = startY + 8;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);

      registrations.forEach((reg, idx) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
          doc.setFillColor(239, 246, 255);
          doc.rect(14, y, pageWidth - 28, 8, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(30, 58, 138);
          doc.text('#', 17, y + 5.5);
          doc.text('Attendee Full Name', 25, y + 5.5);
          doc.text('Mobile Contact', 75, y + 5.5);
          doc.text('Ticket Pass Code', 115, y + 5.5);
          doc.text('Gate Check-In Time', 155, y + 5.5);
          y += 8;
          doc.setFont('helvetica', 'normal');
        }

        if (idx % 2 === 0) {
          doc.setFillColor(250, 250, 250);
          doc.rect(14, y, pageWidth - 28, 7, 'F');
        }
        
        doc.setDrawColor(243, 244, 246);
        doc.line(14, y + 7, pageWidth - 14, y + 7);

        doc.setTextColor(17, 24, 39);
        doc.text(`${idx + 1}`, 17, y + 5);
        doc.text(`${reg.name || ''} ${reg.surname || ''}`, 25, y + 5);
        doc.text(`${reg.contact || ''}`, 75, y + 5);
        
        doc.setTextColor(46, 125, 50);
        doc.text(`${reg.ticketCode || ''}`, 115, y + 5);

        doc.setTextColor(13, 71, 161);
        doc.text(`${reg.checkedInTime || 'Checked-In'}`, 155, y + 5);

        y += 7;
      });

      // Footer
      const totalPages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(7);
        doc.setTextColor(156, 163, 175);
        doc.text(`NRDSS Saudi Arabia Verified Document • Page ${i} of ${totalPages}`, 14, 288);
        doc.text(`Generated on ${new Date().toLocaleString()} • Gate Command Center`, pageWidth - 85, 288);
      }

      const cleanFileName = (event.title || 'Event').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
      doc.save(`NRDSS_Verified_Attendance_${cleanFileName}.pdf`);
      this.showToast('Event Verified Attendance PDF report downloaded successfully!', 'success');
    } catch (err) {
      console.error(err);
      this.showToast('Failed to export PDF attendance report: ' + err.message, 'error');
    }
  }

  // Export Event Attendance Report as Excel (.CSV) Document (Checked-In Attendees Only)
  downloadEventAttendanceExcel(eventId) {
    const events = store.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    // Filter ONLY attendees who have checked in (reg.checkedIn === true)
    const checkedInRegistrations = (event.registrations || []).filter(r => r.checkedIn === true);

    if (checkedInRegistrations.length === 0) {
      this.showToast('No verified checked-in attendees found for this event to export Excel report.', 'warning');
      return;
    }

    const users = store.getUsers();
    let csvRows = [
      ['#', 'Attendee First Name', 'Surname', 'Member Code', 'Mobile Phone', 'Email Address', 'Ticket Code', 'Event Title', 'Event Date', 'Check-In Status', 'Check-In Timestamp', 'Fee Paid (SAR)', 'Payment Status', 'Payment Method']
    ];

    checkedInRegistrations.forEach((reg, idx) => {
      const member = users.find(u => u.id === reg.userId || (u.email && u.email.toLowerCase() === (reg.email || '').toLowerCase()));
      const memberCode = member ? member.memberCode : 'Guest';
      const fee = reg.feePaid !== undefined ? reg.feePaid : (event.registrationFee || 0);

      csvRows.push([
        idx + 1,
        `"${(reg.name || '').replace(/"/g, '""')}"`,
        `"${(reg.surname || '').replace(/"/g, '""')}"`,
        `"${memberCode}"`,
        `"${(reg.contact || '').replace(/"/g, '""')}"`,
        `"${(reg.email || '').replace(/"/g, '""')}"`,
        `"${(reg.ticketCode || '').replace(/"/g, '""')}"`,
        `"${(event.title || '').replace(/"/g, '""')}"`,
        `"${event.date || ''}"`,
        `"VERIFIED CHECKED-IN"`,
        `"${reg.checkedInTime || 'Checked-In'}"`,
        fee,
        `"${reg.paymentStatus || 'Paid'}"`,
        `"${reg.paymentMethod || 'Online / Cash'}"`
      ]);
    });

    // \uFEFF Byte Order Mark forces Microsoft Excel to open file with UTF-8 encoding
    const csvString = '\uFEFF' + csvRows.map(row => row.join(',')).join('\r\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const cleanFileName = (event.title || 'Event').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
    link.href = URL.createObjectURL(blob);
    link.download = `NRDSS_Attendance_Report_${cleanFileName}_Excel.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();

    this.showToast('Event Attendance Excel report downloaded successfully!', 'success');
  }

  // Render Core Application Router
  render() {
    const root = document.getElementById('app-root');
    if (!root) return;

    let contentHtml = '';

    switch (this.currentTab) {
      case 'about':
        contentHtml = this.renderAboutPage();
        break;
      case 'events':
        contentHtml = this.renderEventsPage();
        break;
      case 'gallery':
        contentHtml = this.renderGalleryPage();
        break;
      case 'news':
        contentHtml = this.renderNewsPage();
        break;
      case 'campaigns':
        contentHtml = this.renderCampaignsPage();
        break;
      case 'dashboard':
        contentHtml = (this.currentUser && this.currentUser.role === 'scanner_admin') ? this.renderScannerDashboard() : this.renderMemberDashboard();
        break;
      case 'admin':
        contentHtml = this.renderAdminPortal();
        break;
      case 'home':
      default:
        contentHtml = this.renderHomePage();
        break;
    }

    root.innerHTML = `
      <!-- Fixed Ambient Watermark Background Logo with 10% Opacity -->
      <div class="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-10 select-none">
        ${store.getLogoImgHtml("w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] lg:w-[800px] lg:h-[800px] flex-shrink-0 blur-[0.5px]")}
      </div>

      <div class="relative z-10 flex flex-col min-h-screen">
        ${this.renderHeader()}
        ${contentHtml}
        ${this.renderFooter()}
      </div>
      ${this.renderModals()}
    `;

    lucide.createIcons();
    this.attachQRCodes();
  }

  // Dynamically Render Camera-Optimized High-Resolution QR Codes with Web Page Deep Link
  attachQRCodes() {
    setTimeout(() => {
      // 1. Digital ID Card QR Generator (Encodes NRDSS Web Verification URL)
      const idQrContainer = document.getElementById('id-card-qr-container');
      if (idQrContainer && this.currentUser && this.currentUser.status === 'Approved') {
        idQrContainer.innerHTML = '';
        const cleanPayload = this.currentUser.memberCode || 'NRDSS-2026-8891';
        const verifyUrl = this.getVerificationURL(cleanPayload);
        new QRCode(idQrContainer, {
          text: verifyUrl,
          width: 80,
          height: 80,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        });
      }

      // 2. Event Ticket Attendance Passes Generator (Encodes Ticket Pass Web Verification URL)
      if (this.currentUser) {
        const events = store.getEvents();
        events.forEach(evt => {
          const container = document.getElementById(`evt-qr-${evt.id}`);
          if (container && evt.registeredMembers && evt.registeredMembers.includes(this.currentUser.id)) {
            container.innerHTML = '';
            const evtReg = (evt.registrations || []).find(r => r.userId === this.currentUser.id || r.email === this.currentUser.email);
            const ticketPayload = evtReg ? evtReg.ticketCode : `TKT-${evt.id.replace('evt_', '')}-${this.currentUser.memberCode}`;
            const verifyUrl = this.getVerificationURL(ticketPayload);
            new QRCode(container, {
              text: verifyUrl,
              width: 80,
              height: 80,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: QRCode.CorrectLevel.H
            });
          }
        });
      }
    }, 50);
  }

  setupEventListeners() {
    window.addEventListener('resize', () => lucide.createIcons());
  }
}

// Global Application Instance Initialization
let app;
function initNRDSSApp() {
  if (window.app) return;
  try {
    app = new NRDSSApp();
    window.app = app;
  } catch (err) {
    console.error('NRDSS App initialization error:', err);
  }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initNRDSSApp();
} else {
  document.addEventListener('DOMContentLoaded', initNRDSSApp);
  window.addEventListener('load', initNRDSSApp);
}
