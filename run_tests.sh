#!/bin/bash
echo "🧪 Starting tests..."

# Проверяем что мы в правильной директории
if [ ! -f "manage.py" ]; then
    echo "❌ Error: manage.py not found. Are you in the project root?"
    exit 1
fi

# Запускаем тесты
echo "📊 Running Django tests..."
python manage.py test tests/

# Проверяем результат тестов
if [ $? -eq 0 ]; then
    echo "✅ All tests passed!"
    exit 0
else
    echo "❌ Some tests failed!"
    exit 1
fi
