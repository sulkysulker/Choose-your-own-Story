from typing import List
from dotenv import load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator

load_dotenv()  # ← VERY IMPORTANT ON WINDOWS + reload

class Settings(BaseSettings):
    API_PREFIX: str = "/api"
    DEBUG: bool = False
    DATABASE_URL: str
    ALLOWED_ORIGINS: str = ""
    OPENAI_API_KEY: str

    @field_validator("ALLOWED_ORIGINS")
    @classmethod
    def parse_allowed_origins(cls, v: str) -> List[str]:
        return v.split(",") if v else []

    model_config = SettingsConfigDict(
        case_sensitive=True
    )

settings = Settings()
