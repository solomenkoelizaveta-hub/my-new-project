const newFeature = require('./new-feature');

function testDemoText() {
    console.log("Тест пройден успешно!");
    return true;
}

function testNewFeature() {
    const result = newFeature();
    if (result === "Это новая функция!") {
        console.log("✅ Новая функция работает правильно!");
        return true;
    } else {
        console.log("❌ Новая функция не работает!");
        return false;
    }
}

// Запуск всех тестов
if (testDemoText() && testNewFeature()) {
    console.log("✅ Все тесты пройдены!");
} else {
    console.log("❌ Тесты не пройдены!");
    process.exit(1);
}
