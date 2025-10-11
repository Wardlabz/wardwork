# Deploy Backend en Render

## Paso 1: Push del archivo render.yaml

```bash
git add render.yaml
git commit -m "config: add render.yaml for backend deployment"
git push
```

## Paso 2: Configurar Variables de Entorno en Render

Después de conectar el repositorio en Render, necesitas configurar estas variables:

### Variables Requeridas:

1. **SUPABASE_URL**
   - Obtén de: Supabase Dashboard → Settings → API
   - Ejemplo: `https://xxxxx.supabase.co`

2. **SUPABASE_SERVICE_ROLE_KEY**
   - Obtén de: Supabase Dashboard → Settings → API → service_role key
   - ⚠️ Mantén esta clave secreta

3. **JWT_SECRET**
   - Render lo genera automáticamente
   - O usa tu propio valor seguro

### Variables Opcionales (Stellar):

4. **STELLAR_ADMIN_SECRET_KEY**
   - Solo si vas a usar integración con Stellar
   - Clave privada del admin en Stellar

5. **USER_REGISTRY_CONTRACT_ID**
   - ID del contrato de registro en Stellar
   - Solo si usas blockchain

## Paso 3: Deploy

1. Ve a Render Dashboard
2. New → Blueprint
3. Conecta tu repositorio `WARDWORK/wardwork`
4. Selecciona branch `main`
5. Render detectará `render.yaml` automáticamente
6. Click en "Apply"

## Paso 4: Configurar Frontend

Una vez deployado el backend, obtendrás una URL como:
```
https://wardwork-backend.onrender.com
```

Configura en Vercel (frontend):
- Variable: `NEXT_PUBLIC_API_URL`
- Valor: `https://wardwork-backend.onrender.com/api`

## Notas Importantes:

- ⚠️ **Tier gratuito**: El backend se dormirá después de 15 minutos de inactividad
- ⏱️ **Cold start**: Primer request toma ~30 segundos al despertar
- 💰 **Costo**: $0 con limitaciones del tier gratuito
- 🔄 **Auto-deploy**: Cada push a `main` redespliega automáticamente

## Verificar Deploy:

```bash
curl https://tu-backend.onrender.com
# Debe retornar: "💼 WARDWORK backend is up and running!"
```

## Problemas Comunes:

1. **Build failed**: Verifica que `package.json` tenga scripts `build` y `start`
2. **Variables faltantes**: Todas las variables de Supabase son requeridas
3. **Timeout**: Normal en tier gratuito, el servidor tarda en iniciar

