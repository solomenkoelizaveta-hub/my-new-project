import os
import sys
import django
from django.test import TestCase

# Добавляем путь к проекту
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Настройка Django для тестов
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
django.setup()

class BasicTests(TestCase):
    def test_basic_math(self):
        """Проверяем что базовая математика работает"""
        self.assertEqual(1 + 1, 2)
        
    def test_django_installed(self):
        """Проверяем что Django доступен"""
        try:
            import django
            self.assertTrue(True)
        except ImportError:
            self.fail("Django not installed")
            
    def test_project_structure(self):
        """Проверяем базовую структуру проекта"""
        self.assertTrue(os.path.exists('manage.py'))
