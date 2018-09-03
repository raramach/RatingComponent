public class ratingController {
    
    @AuraEnabled
    public static void saveRating(Integer numRating){
      //  System.debug('++++' + numRating);
      //  Integer iRating = Integer.valueOf(numRating);
      //  System.debug('++++' + iRating);
        Rating__c rt = new Rating__c();
        rt.Rating__c = Double.valueOf(numRating);
        rt.User__c = UserInfo.getUserId();
        insert rt;
        //new comments
        return;
    }
    
    @AuraEnabled
    public static Integer getRating(){
        System.debug('test');
        Rating__c rt = [select rating__c from Rating__c limit 1];
        Integer iRating = Integer.valueOf(rt.Rating__c);
        system.debug('integer ' + iRating);
        return iRating;
    }

}
