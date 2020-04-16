import os
from dotenv import load_dotenv

load_dotenv()

KEYS = {
    'NEWS': os.getenv('NEWSAPI')
}
