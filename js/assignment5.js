let accountBalance = 5000;

// দান সেকশন এবং ইতিহাস সেকশন টগল করার জন্য ইভেন্ট লিসেনার
document.getElementById('donationBtn').addEventListener('click', () => {
    document.getElementById('donationSection').classList.remove('hidden');
    document.getElementById('historySection').classList.add('hidden');
    toggleActiveButton('donationBtn', 'historyBtn');
});

document.getElementById('historyBtn').addEventListener('click', () => {
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
    toggleActiveButton('historyBtn', 'donationBtn');
});

// সক্রিয় এবং নিষ্ক্রিয় বাটনের স্টাইল পরিবর্তনের জন্য ফাংশন
function toggleActiveButton(activeId, inactiveId) {
    document.getElementById(activeId).classList.add('bg-blue-500');
    document.getElementById(activeId).classList.remove('bg-gray-700');
    document.getElementById(inactiveId).classList.add('bg-gray-700');
    document.getElementById(inactiveId).classList.remove('bg-blue-500');

    
}

document.getElementById('toggleButton').addEventListener('click', function() {
    const button = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    // যদি ব্লগ লেখা থাকে, সেটি হোমে পরিবর্তন করো
    if (button.innerText === 'Blog') {
        button.innerText = 'Home';
        window.location.href = 'home.html';  // হোম পেজের HTML
    } 
    // যদি হোম লেখা থাকে, সেটি ব্লগে পরিবর্তন করো
    else {
        button.innerText = 'Blog';
        window.location.href = 'blog.html';  // ব্লগ পেজের HTML
    }
});

// অনুদান দেওয়ার জন্য ফাংশন
function donate(cardId) {
    const donationInput = document.getElementById(`donationAmount${cardId}`);
    const donationAmount = parseFloat(donationInput.value);

    let donationName = "";

    // cardId অনুযায়ী অনুদানের নাম নির্ধারণ করা
    if (cardId === 1) {
        donationName = "Flood Relief for Noakhali";
    } else if (cardId === 2) {
        donationName = "Flood Relief for Feni";
    } else if (cardId === 3) {
        donationName = "Aid for Injured in Quota Movement";
    }

    if (validateDonation(donationAmount)) {
        accountBalance -= donationAmount;
        document.getElementById('balance').innerHTML = `Balance: <img src="coin.png" alt="coin" class="w-5 h-5 mx-2"> $${accountBalance}`;

        const currentDonation = document.getElementById(`currentDonation${cardId}`);
        const newDonationAmount = parseFloat(currentDonation.textContent.substring(1)) + donationAmount;
        currentDonation.textContent = `$${newDonationAmount}`;

        const historyLog = document.getElementById('historyLog');
        const currentTime = new Date().toLocaleString();

        // অনুদানের নামসহ আউটপুটে ইতিহাস লগ করা হবে
        historyLog.innerHTML += `<p>Donated $${donationAmount} to ${donationName} on ${currentTime}</p>`;

        document.getElementById('successModal').classList.remove('hidden');
    }
}

// মডাল বন্ধ করার জন্য ফাংশন
function closeModal() {
    document.getElementById('successModal').classList.add('hidden');
}

// অনুদানের ভ্যালিডেশন করার জন্য ফাংশন
function validateDonation(donationAmount) {
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return false;
    }

    if (donationAmount > accountBalance) {
        alert('You do not have enough balance.');
        return false;
    }

    return true;
}

document.getElementById('toggleButton').addEventListener('click', function() {
    const button = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    // যদি ব্লগ লেখা থাকে, সেটি হোমে পরিবর্তন করো
    if (button.innerText === 'Blog') {
        button.innerText = 'Home';
        window.location.href = 'home.html';  // হোম পেজের HTML
    } 
    // যদি হোম লেখা থাকে, সেটি ব্লগে পরিবর্তন করো
    else {
        button.innerText = 'Blog';
        window.location.href = 'blog.html';  // ব্লগ পেজের HTML
    }
});

