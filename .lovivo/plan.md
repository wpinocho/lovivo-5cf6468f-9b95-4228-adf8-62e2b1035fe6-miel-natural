# APIS TERRA Store Plan

## Current State
- Store has 6 active products and 1 archived product
- Products are now sorted ascending by created_at (oldest first = reversed order)

## Active Products (current display order after change)
1. Miel de Abeja 100% Natural - $150 - 350g
2. Miel Infusionada con Romero - $130 - 168g
3. Miel Infusionada con Lavanda - $130 - 168g
4. Miel Infusionada con Cardamomo - $130 - 168g
5. Vela de Cera de Abeja Chica - $120
6. Vela de Cera de Abeja Mediana - $185
7. (archived) Velas de Cera de Abeja 100% Pura

## Recent Changes
- Changed product sort order to ascending (oldest first) to reverse display order
- Updated images for Cardamomo, Lavanda, Romero with real product photos
- Updated Miel de Abeja 100% Natural price to $150, 350g with real product photo
- Archived "Velas de Cera de Abeja 100% Pura" (penúltimo)

## Technical Notes
- HeadlessIndex.tsx: `.order('created_at', { ascending: true })` — controls product order on both Index and Products pages
- Products page at /productos