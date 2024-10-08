namespace OregonTilth.EFModels.Util
{
    public static class ModelObjectHelpers
    {
        public static bool IsRealPrimaryKey(this int entityID)
        {
            return entityID > 0;
        }
    }
}